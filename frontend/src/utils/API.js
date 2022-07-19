class API {
  static host = "http://localhost:5000";

  static signup(fullName, password, phoneNumber) {
    console.log(`${API.host}/signup`);
    fetch(`${API.host}/signup`, {
      method: "POST",
      body: {
        fullName: fullName,
        password: password,
        phoneNumber: phoneNumber,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  static signIn(fullName, password, phoneNumber) {
    fetch(`${API.host}/signin`, {
      method: "POST",
      body: {
        fullName: fullName,
        password: password,
        phoneNumber: phoneNumber,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}

export default API;
