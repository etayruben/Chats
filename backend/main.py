import json
from connections import app, socketio
from mongoDB import DB
from flask_socketio import join_room, leave_room


connected_clients = {}


@app.route("/signin", methods=["POST"])
def signin():
    print("signin")
    # TODO: Check if the user is in the data base, If yes, /
    #  Generate a Token for the user and return either the token or User is not registered

    return "Yay"


@app.route("/signup", methods=["POST"])
def signup():
    # DB.create_user()
    return "Yay"


@socketio.on('message')
def handle_message(data):
    data = json.loads(data)
    full_name = data["fullName"]
    message = data["message"]
    timestamp = data["timestamp"]
    room = data["room"]
    token = data["token"]
    print(full_name, message, timestamp, room, token)
    # TODO: Add the message to the right Conversation
    # TODO: Send the message to all the people in the room
    socketio.emit("message", data)


@socketio.on("disconnect")
def on_disconnect():
    pass


@socketio.on("connect")
def on_connect():



@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)


if __name__ == '__main__':
    socketio.run(app=app, host="0.0.0.0", port=5000)
