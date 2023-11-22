import React, { useState, useEffect } from "react";
import "./TodosStyle.css";
import { NavLink, useNavigate } from "react-router-dom";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [originalTodos, setOriginalTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [checkboxStates, setCheckboxStates] = useState({});
  const local = JSON.parse(localStorage.getItem("currentUser"));
  const [newTodo, setnewTodo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/todos?userId=${local.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setOriginalTodos(data);
        setFilteredTodos(data);

        // init checkbox states from the database
        const initialCheckboxStates = {};
        data.forEach((todo) => {
          initialCheckboxStates[todo.id] = todo.completed;
        });
        setCheckboxStates(initialCheckboxStates);
      });
  }, []);
  useEffect(() => {});
  const searchTodo = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilter((prev) => [...prev, searchTerm]);

    const filtered = originalTodos.filter(
      (todo) =>
        todo.id.toString().includes(searchTerm) ||
        todo.title.toLowerCase().includes(searchTerm)
    );

    setFilteredTodos(filtered);
  };

  const sortAZ = () => {
    const sorted = [...filteredTodos].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredTodos(sorted);
  };

  const filterChecked = () => {
    const checkedTodos = [...originalTodos].filter((todo) => todo.completed);
    setFilteredTodos(checkedTodos);
  };

  const filterUnchecked = () => {
    const uncheckedTodos = [...originalTodos].filter((todo) => !todo.completed);
    setFilteredTodos(uncheckedTodos);
  };

  const showAll = () => {
    setFilteredTodos(originalTodos);
  };

  const checking = async (e, todoId) => {
    try {
      console.log(todoId);
      // Update the local state
      const updatedCheckboxStates = {
        ...checkboxStates,
        [todoId]: e.currentTarget.checked,
      };
      setCheckboxStates(updatedCheckboxStates);

      // Update the database

      const res = fetch(`http://localhost:3000/todos?userId=${local.id}`)
        .then((res) => res.json())
        .then((data) => {
          // init checkbox states from the database
          data.map((state) => {
            if (state.id === todoId) {
              state.completed = e.currentTarget.checked;
              const response = fetch(`http://localhost:3000/todos/${todoId}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(state),
              });
            }
          });
        });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const newTodofunc = () => {
    navigate("/todos/newtodo");
    return <Todo newTodo={newTodo} setnewTodo={setnewTodo} />;
  };
  const deleteitem = async (todoId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/todos/${todoId.target.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete todo with ID ${todoId}`);
      }

      // Remove the deleted todo from state
      setOriginalTodos((prev) =>
        prev.filter((todo) => todo.id !== +todoId.target.id)
      );
      setFilteredTodos((prev) =>
        prev.filter((todo) => todo.id !== +todoId.target.id)
      );

      console.log(`Todo with ID ${todoId.target.id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <input
          className="items"
          onChange={searchTodo}
          type="search"
          name=""
          id=""
        />
        <button className="items" onClick={newTodofunc}>
          Create New One
        </button>
        <button className="items" onClick={sortAZ}>
          Sort A-Z
        </button>
        <button className="items" onClick={filterChecked}>
          Show Checked
        </button>
        <button className="items" onClick={filterUnchecked}>
          Show Unchecked
        </button>
        <button className="items" onClick={showAll}>
          Show All
        </button>
        {filteredTodos.map((todo, index) => (
          <div key={index} className="todosContainer">
            <div className="items num">Number : {todo.id}</div>
            <div className="items">Title : {todo.title}</div>
            <label className="items" htmlFor={`checkedcomp${todo.id}`}>
              completed:
              <input
                className="items"
                id={`${todo.id}`}
                name={`checkedcomp${todo.id}`}
                type="checkbox"
                checked={checkboxStates[todo.id]}
                onChange={(e) => checking(e, todo.id)}
              />
            </label>
            <button id={todo.id} className="items" onClick={deleteitem}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
