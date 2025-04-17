from app import create_app, db
from app.models import User, OAuth2Client

app = create_app()

with app.app_context():
    # Create tables
    db.create_all()
    
    # Add a test user
    if not User.query.filter_by(username='test').first():
        user = User(username='test', email='test@example.com')
        user.set_password('test')
        db.session.add(user)
        db.session.commit()
    
    # Add a test client
    if not OAuth2Client.query.filter_by(client_id='your-client-id').first():
        client = OAuth2Client(
            client_id='your-client-id',
            client_secret='your-client-secret',
            client_id_issued_at=0,
            client_secret_expires_at=0,
            user_id=1  # Assuming test user has id=1
        )
        db.session.add(client)
        db.session.commit()
