import { useState } from "react";
import "../../styles/welcome-page.css";

const WelcomePage = ({ setUsername, socket }) => {
  const [signIn, setSignIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let { fullName, password, phoneNumber } = e.target;
    console.log(fullName.value, password.value, phoneNumber.value);
  };

  return (
    <div className="welcome-page">
      <div className="Wrapper">
        <h1 className="Title">Enter Full Name And Phone Number</h1>
        <form onSubmit={onSubmit}>
          <div className="Input">
            <input
              dir="auto"
              type="text"
              id="fullName"
              value={"Etay"}
              name="full-name"
              className="Input-text"
              placeholder="Your Full Name, e.g. Nitsan Eilon"
            />
            <label htmlFor="full-name" className="Input-label">
              Full Name
            </label>
          </div>
          <div className="Input">
            <input
              style={{ marginTop: "40px" }}
              dir="auto"
              type="password"
              value={"q1w4e9r2t4"}
              id="password"
              name="password"
              className="Input-text"
              placeholder="Enter a strong password"
            />
            <label htmlFor="password" className="Input-label">
              Password
            </label>
          </div>
          <div className="Input">
            <input
              style={{ marginTop: "40px" }}
              dir="auto"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={"0525777197"}
              className="Input-text"
              placeholder="0525777107"
            />
            <label htmlFor="phone-input" className="Input-label">
              Phone number
            </label>
          </div>
          <div className="login-div">
            <button style={{ marginTop: "40px" }} className="button">
              {signIn ? "Login" : "Sign up"}
            </button>
            <label className="switch">
              <input
                type="checkbox"
                onClick={(e) => setSignIn(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
