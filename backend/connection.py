import os

import certifi
import pymongo
from dotenv import load_dotenv
load_dotenv()

ca = certifi.where()
client = pymongo.MongoClient(os.getenv("MONGO_DB_URI"), tlsCAFile=ca)

db = client.Chats
Conversation = db["Conversation"]
Users = db["Users"]

