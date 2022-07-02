import rooms from "../utils/rooms.json";

function Contacts(props) {
  return (
    <div className="contacts">
      {rooms.map((room) => (
        <div className="contact-card-container">
          <img
            src="../images/background-image.jpg"
            alt={room.roomName}
            className="lobby-picture"
          />
          <div
            onClick={(e) => props.handleContactClick(e, room.roomID)}
            className="contact-card"
          >
            {room.roomName}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
