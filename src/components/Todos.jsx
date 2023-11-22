import React, { useState, useEffect } from "react";
import "./TodosStyle.css";
import { NavLink } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [originalTodos, setOriginalTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [checkboxStates, setCheckboxStates] = useState({});
  const local = JSON.parse(localStorage.getItem("currentUser"));

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

  const checking = (e, todoId) => {
    const updatedCheckboxStates = {
      ...checkboxStates,
      [todoId]: e.currentTarget.checked,
    };
    // useEffect(() => {
    //   fetch(`http://localhost:3000/todos?userId=${local.id}?id=${todoId}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(e.target.checked),
    //   });
    // }, []);
    setCheckboxStates(updatedCheckboxStates);
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
                id={`checkedcomp${todo.id}`}
                name={`checkedcomp${todo.id}`}
                type="checkbox"
                checked={checkboxStates[todo.id]}
                onChange={(e) => checking(e, todo.id)}
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
