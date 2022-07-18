from connections import app, socketio
from flask_socketio import send, join_room, leave_room


@app.route("/signin", methods=["POST"])
def signin():
    print("signin")
    # TODO: Check if the user is in the data base, If yes, /
    #  Generate a Token for the user and return either the token or User is not registered

    return "Yay"


@app.route("/signup", methods=["POST"])
def signup():
    print("signup")
    return "Yay"


@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)


@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)


if __name__ == '__main__':
    socketio.run(app=app, host="0.0.0.0", port=5000)
