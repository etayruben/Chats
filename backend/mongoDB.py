from connections import Users, Conversations
import phonenumbers
import datetime


class Conversation:

    def __init__(self, members: list, title: str):
        self.members = members
        self.title = title

    def to_json(self):
        return {
            "conversation_title": self.title,
            "created_time": datetime.datetime.now(),
            "members": self.members,
            "messages": [],
            "total_messages": 0
        }


class User:

    def __new__(cls, phone_number: str, full_name: str, password: str):
        phone_number = phonenumbers.parse(phone_number, region="IL")
        if not phonenumbers.is_valid_number(phone_number) and (len(full_name) > 255 or len(password) > 255):
            return False
        cls.phone_number = phone_number.national_number
        cls.full_name = full_name
        cls.password = password

        return super().__new__(cls)

    def __init__(self, phone_number: str, full_name: str, password: str):
        self.phone_number = phone_number
        self.full_name = full_name
        self.password = password

    def to_json(self):
        return {
            self.phone_number: {
                "conversations": [1],
                "username": self.full_name,
                "password": self.password
            }
        }


class DB:

    @staticmethod
    def __validate_user_creation(phone_number: str, full_name: str, password: str) -> bool:
        return type(phone_number) and type(full_name) and type(password) == str

    @staticmethod
    def __check_duplicate(user: User) -> bool:
        Users.find_one({"phone_number": user.phone_number})

    @staticmethod
    def create_user(phone_number: str, full_name: str, password: str):
        if DB.__validate_user_creation(phone_number=phone_number, full_name=full_name, password=password):
            new_user = User(phone_number=phone_number, full_name=full_name, password=password)
            if DB.__check_duplicate(new_user):
                Users.insert_one(new_user.to_json())
                return True
        return False

    @staticmethod
    def get_user(phone_number: str):
        pass

    @staticmethod
    def get_conversation_messages(conversation_id: int):
        pass
