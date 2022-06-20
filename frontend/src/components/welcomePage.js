import "../styles/welcome-page.css";

function WelcomePage(props) {
  return (
    <div className="welcome-page">
      <div className="Wrapper">
        <h1 className="Title">Enter Username Here!</h1>
        <div className="Input">
          <input
            type="text"
            id="input"
            className="Input-text"
            placeholder="Your Full Name, e.g. Nitsan Eilon"
            onKeyDownCapture={props.handleWelcomePageClick}
          />
          <label htmlFor="input" className="Input-label">
            Full Name
          </label>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
