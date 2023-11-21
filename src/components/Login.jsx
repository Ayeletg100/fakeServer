import React from "react";
import { useState, useNavigate } from "react";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userDoesntExist, setUserDoesntExist] = useState(false);
  const goToRegister = useNavigate();
  function handleGoToRegisterClick() {
    goToRegister("/register");
  }
  async function checkUser() {
    try {
      const users = await fetch(" http://localhost:3000/users");
      if (!users.ok)
        throw Error("a problem ocurred, try loading the page again");
      const dataUsers = await users.json();
      const currentUser = dataUsers.find(
        (user) => user.username === userName && user.website === password
      );
      if (currentUser === undefined) {
        setUserDoesntExist(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="username">username:</label>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        >
          {userName}
        </input>
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          {password}
        </input>
        <button onClick={checkUser}>enter</button>
      </form>
      {userDoesntExist && "user does not exist"}
      <p>
        dont have a password? <br /> register below
      </p>
      <button onClick={handleGoToRegisterClick}>register</button>
    </div>
  );
};

export default Login;
