from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__,  template_folder="template")

    # app.debug = True

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/medica_db'

    db.init_app(app)

    from .views import main

    app.register_blueprint(main)

    CORS(app)

    return app 

app = create_app()

with app.app_context():
    # Create database tables using db.create_all()
    db.create_all()
