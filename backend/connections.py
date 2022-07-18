import os
from pymongo import MongoClient

from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret!"
CORS(app=app)
socketio = SocketIO(app=app)

client = MongoClient(
    f"mongodb+srv://etayruben:{os.getenv('MONGODB_PASSWORD')}@chats.xx0m5.mongodb.net/?retryWrites=true&w=majority")
db = client.Chats
Users = db["Users"]
