import React, { useState } from "react";
import "./ListTodo.scss";
import { toast } from "react-toastify";
const ListTodo = () => {
  const [todo, setTodo] = useState([
    { id: "todo1", title: "Gym" },
    { id: "todo2", title: "Play" },
    { id: "todo3", title: "Code" },
  ]);
  const [inputvalue, setInputValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [inputUpdate, setInputUpdate] = useState("");
  const [update, setUpdate] = useState("");
  const handleClickAdd = (e) => {
    // console.log("Click", e.target.value);
    if (!inputvalue) {
      toast.error("Emty value");
    } else {
      let newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: inputvalue,
      };
      setTodo([...todo, newTodo]);
      setInputValue("");
      toast.success("Add success!");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleDelete = (id) => {
    let currentTodo = [...todo];
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodo(currentTodo);
    toast.success("Delete success");
  };

  const handleEdit = (id, title) => {
    setEditId(id);
    setEdit(!edit);
    setInputUpdate(title);
  };
  const handleSave = () => {
    setUpdate(inputUpdate);
    const newTodo = [...todo];
    newTodo.forEach((todo) => {
      if (todo.id === editId) {
        todo.title = inputUpdate;
      }
    });
    setTodo(newTodo);
    setEdit(!edit);
    toast.success("Update success");
  };
  const changeInputUpdate = (e) => {
    setInputUpdate(e.target.value);
  };
  return (
    <div className="list-todo-container">
      <p>Hi! This is list Todo</p>
      <div className="add-todo">
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          value={inputvalue}
        ></input>
        <button
          type="button"
          onClick={(e) => {
            handleClickAdd(e);
          }}
        >
          Add
        </button>
      </div>{" "}
      <hr />
      <div className="list-todo-content">
        <div className="todo-item">
          {todo.map((todo) => {
            return (
              <div key={todo.id}>
                {edit && editId === todo.id ? (
                  <input
                    type="text"
                    className="input-update"
                    value={inputUpdate}
                    onChange={(e) => changeInputUpdate(e)}
                  ></input>
                ) : (
                  todo.title
                )}

                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
                {!edit || editId !== todo.id ? (
                  <button
                    onClick={() => {
                      handleEdit(todo.id, todo.title);
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleSave(todo.id);
                    }}
                  >
                    Save
                  </button>
                )}
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
