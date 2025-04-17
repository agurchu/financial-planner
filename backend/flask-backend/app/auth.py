from flask import Blueprint, request, jsonify, redirect, url_for
from flask_login import login_user, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import User, OAuth2Client
from app import db
from authlib.integrations.flask_oauth2 import AuthorizationServer
from authlib.oauth2 import OAuth2Request
from authlib.oauth2.rfc6749 import grants
import logging
logging.basicConfig(level=logging.DEBUG)  # Add to top of file

auth_bp = Blueprint('auth', __name__)

# OAuth2 implementation
authorization = AuthorizationServer()



class PasswordGrant(grants.ResourceOwnerPasswordCredentialsGrant):
    TOKEN_ENDPOINT_AUTH_METHODS = ['client_secret_basic', 'client_secret_post']
    
    def authenticate_user(self, username, password):
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):
            return user

def config_oauth(app):
    authorization.init_app(app)
    
    # Register grants
    authorization.register_grant(PasswordGrant)
    authorization.register_grant(grants.AuthorizationCodeGrant)
    authorization.register_grant(grants.ImplicitGrant)
    authorization.register_grant(grants.ClientCredentialsGrant)
    authorization.register_grant(grants.RefreshTokenGrant)
    # Register client getter
    @authorization.client_getter
    def get_client(client_id):
        return OAuth2Client.query.filter_by(client_id=client_id).first()

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    
    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400
    
    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    user = User.query.filter_by(username=username).first()
    
    if not user or not user.check_password(password):
        return jsonify({'message': 'Invalid username or password'}), 401
    
    login_user(user)
    return jsonify({'message': 'Logged in successfully'}), 200

@auth_bp.route('/logout')
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200

@auth_bp.route('/oauth/token', methods=['POST'])
def issue_token():
    print("Incoming request data:", request.get_json())  # Log raw input
    
    if request.is_json:
        data = request.get_json()
        request.form = data  # Convert JSON to form data
    
    return authorization.create_token_response()

@auth_bp.route('/oauth/authorize', methods=['GET', 'POST'])
def authorize():
    if not current_user.is_authenticated:
        return redirect(url_for('auth.login'))
    
    if request.method == 'GET':
        grant = authorization.validate_consent_request()
        return jsonify(grant=grant)
    
    granted = request.form.get('grant')
    if granted:
        return authorization.create_authorization_response(grant_user=current_user)
    return authorization.create_authorization_response(grant_user=None)
