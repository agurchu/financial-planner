# Setting Up the Backend

# Create a Virtual Environment (Recommended):
It's a good practice to create a virtual environment to manage dependencies and avoid conflicts with other projects. You can create one by running the following command in your terminal:
`python -m venv venv`
After that, you need to activate the virtual environment. To activate it, use the following commands depending on your operating system:

On macOS or Linux: `source venv/bin/activate`

On Windows: `venv\Scripts\activate`

# Install Python Dependencies:
Once the virtual environment is activated, you'll need to install the necessary dependencies for the project. If you have a `requirements.txt` file, simply run: `pip install -r requirements.txt`
This will automatically install all the required libraries.
If you don't have a `requirements.txt` file, you can manually install Flask by running: `pip install flask`

# Run the Backend:
After the dependencies are installed, you can run the backend by executing the following command:
`python app.py`
This will start the server, and the API will be available at `http://localhost:5000 `by default.

# Implementations and Features

need to implement the API endpoints `(e.g., /save, /load, /goals)` in app.py.
`Financial Tracking:` Input income and categorized expenses through an intuitive UI.
`Goal Management:` Define goals (short-term: 0-1 year, medium-term: 1-5 years, long-term: 5+ years) with priorities (1-10).
`Progress Tracking:` Visualize savings allocation across goals based on priority.
`SWOT Analysis:` Enter personal attributes to inform AI recommendations.
`AI Guidance:` Receive rule-based tips (e.g., "Lower entertainment costs").
`Data Persistence:` Save/load data to/from a JSON file
`Error Handling:` User-friendly feedback for invalid inputs.

# File Structure
 backend/
│   ├── app.py            # Python API server (Flask)
│   ├── financial_planner.py  # Core logic
│   └── data.json         # Saved data