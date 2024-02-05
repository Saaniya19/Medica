from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__,  template_folder="template")

    # app.debug = True

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:pswd@localhost/medica'

    db.init_app(app)

    from .views import main

    app.register_blueprint(main)

    return app 

app = create_app()

with app.app_context():
    # Create database tables using db.create_all()
    db.create_all()
