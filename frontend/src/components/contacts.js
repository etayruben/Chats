import rooms from "../utils/rooms.json";

function Contacts({ handleContactClick }) {
  return (
    <div className="contacts">
      {rooms.map((room) => (
        <div
          key={room.roomID}
          onClick={(e) => handleContactClick(e, room.roomID)}
          className="contact-card-container"
        >
          <img
            src={"../images/" + room.roomPicture}
            alt={room.roomName}
            className="lobby-picture"
          />
          <div className="contact-card">{room.roomName}</div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
