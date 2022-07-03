import "../styles/welcome-page.css";

const WelcomePage = ({ setUsername }) => {
  const handleWelcomePageClick = (e) => {
    e.preventDefault();
    setUsername(e.target.input.value);
  };

  return (
    <div className="welcome-page">
      <div className="Wrapper">
        <h1 className="Title">Enter Full Name And Phone Number</h1>
        <form onSubmit={handleWelcomePageClick}>
          <div className="Input">
            <input
              dir="auto"
              type="text"
              id="input"
              name="input"
              className="Input-text"
              placeholder="Your Full Name, e.g. Nitsan Eilon"
            />
            <label htmlFor="input" className="Input-label">
              Full Name
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
