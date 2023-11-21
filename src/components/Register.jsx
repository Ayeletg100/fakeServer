import React from "react";

const Register = () => {
  function onSubmitRegister(e) {
    e.preventDefault();
  }
  return (
    <>
      <div>Register</div>
      <form id="" onSubmit={onSubmitRegister} action="post">
        <label htmlFor="name">Name</label>
        <input name="name" placeholder="Name" id="name" type="text" />
        <label htmlFor="Username">Username</label>
        <input
          name="Username"
          placeholder="Username"
          id="userName"
          type="text"
        />
        <label htmlFor="Email">Email</label>
        <input name="Email" placeholder="Email" id="email" type="email" />
      </form>
    </>
  );
};

export default Register;
