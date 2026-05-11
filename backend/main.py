from flask import Flask
from flask_restx import Api
from models import Recipe, User
from exts import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from recipes import recipe_ns
from auth import auth_ns
from flask_cors import CORS

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)

    migrate = Migrate(app, db)
    JWTManager(app)

    # CORS must be initialized BEFORE Api so preflight OPTIONS requests get headers
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

    api = Api(app, doc='/docs')
    
    api.add_namespace(recipe_ns)
    api.add_namespace(auth_ns)
        
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "Recipe": Recipe,
            "User": User
        }
        
    return app
