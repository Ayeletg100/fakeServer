import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Todo = ({ newTodo, setnewTodo }) => {
  const [inputs, setinputs] = useState({});
  const navigate = useNavigate();
  const local = JSON.parse(localStorage.getItem("currentUser"));
  async function onSubmitRegister(e) {
    e.preventDefault();
    console.log("hey inputs", inputs);
    delete inputs.verifyPassword;
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inputs, userId: local.id }),
    });
    setnewTodo(local.id);
    console.log(newTodo);
    await alert("A new Todo has been created");
    navigate("/todos");
  }
  return (
    <>
      <div>New To Do</div>
      <form className="RegisterForm" onSubmit={onSubmitRegister} action="post">
        <label htmlFor="Title">Title:</label>
        <input
          value={inputs.title}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, title: e.target.value }))
          }
          name="title"
          placeholder="Title"
          id="title"
          type="text"
        />
        <label htmlFor="Username">completed:</label>
        <input
          value={inputs.completed}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, completed: e.target.value }))
          }
          name="completed"
          placeholder="Completed"
          id="completed"
          type="text"
        />

        <input name="Submit" id="Submit" type="submit" />
      </form>
    </>
  );
};

export default Todo;
