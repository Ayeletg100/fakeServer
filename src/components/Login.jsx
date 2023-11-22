import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userDoesntExist, setUserDoesntExist] = useState(false);
  const goToRegister = useNavigate();
  function handleGoToRegisterClick() {
    goToRegister("/register");
  }
  async function checkUser(e) {
    e.preventDefault();
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
      } else {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        goToRegister("/home");
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
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <label htmlFor="password">password</label>
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

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
