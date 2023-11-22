import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./RegisterStyle.css";
const Register = () => {
  const [inputs, setinputs] = useState({});
  const navigate = useNavigate();
  async function onSubmitRegister(e) {
    e.preventDefault();
    if (inputs.website !== inputs.verifyPassword) {
      alert("password confirmation or password is incorrect");
      return false;
    } else {
      console.log("hey inputs", inputs);
      delete inputs.verifyPassword;
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      await alert("the user has been created successfully");
      navigate("/");
    }
  }

  return (
    <>
      <div>Register</div>
      <form className="RegisterForm" onSubmit={onSubmitRegister} action="post">
        <label htmlFor="name">Name</label>
        <input
          value={inputs.name}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, name: e.target.value }))
          }
          name="name"
          placeholder="Name"
          id="name"
          type="text"
        />
        <label htmlFor="Username">Username</label>
        <input
          value={inputs.username}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, username: e.target.value }))
          }
          name="username"
          placeholder="Username"
          id="userName"
          type="text"
        />
        <label htmlFor="Email">Email</label>
        <input
          value={inputs.email}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, email: e.target.value }))
          }
          name="email"
          placeholder="email"
          id="email"
          type="email"
        />
        <label htmlFor="website">Password</label>
        <input
          value={inputs.website}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, website: e.target.value }))
          }
          name="website"
          placeholder="Password"
          id="password"
          type="password"
        />
        <label htmlFor="verifyPassword">Verify Password</label>
        <input
          value={inputs.verifyPassword}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, verifyPassword: e.target.value }))
          }
          name="verifyPassword"
          placeholder="verifyPassword"
          id="verifyPassword"
          type="password"
        />
        <label htmlFor="phone">phone</label>
        <input
          value={inputs.phone}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, phone: e.target.value }))
          }
          name="phone"
          placeholder="Phone"
          id="phone"
          type="tel"
        />
        <input name="Submit" id="Submit" type="submit" />
      </form>
    </>
  );
};

export default Register;
