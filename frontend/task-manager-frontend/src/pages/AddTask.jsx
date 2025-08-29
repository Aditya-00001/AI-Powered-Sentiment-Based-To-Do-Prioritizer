import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTask.css"; // import CSS file

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tasks", { title, description });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-task-container">
      <h2 className="heading">Add New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input"
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="textarea"
        />
        <button type="submit" className="btn submit-btn">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
