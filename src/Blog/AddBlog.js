import React, { useState } from "react";
import "./Blog.scss";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    if (!title) {
      alert("Emty title");
      return;
    }
    if (!content) {
      alert("Emty content");
      return;
    }
    console.log(title, content);
  };
  return (
    <div className="add_new_container">
      <h1>---Add New Blog---</h1>
      <div className="add_new_data">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="add_new_data">
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddBlog;
