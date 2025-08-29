import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskList.css"; // import stylesheet

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setEditForm({ title: task.title, description: task.description });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, editForm);
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
      setEditingTaskId(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="task-container">
      <h2 className="heading">Task List</h2>
      {tasks.length === 0 ? (
        <p className="empty-text">No tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-card">
              {editingTaskId === task._id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                    className="input"
                  />
                  <textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm({ ...editForm, description: e.target.value })
                    }
                    className="textarea"
                  />
                  <div className="btn-group">
                    <button className="btn save" onClick={() => handleUpdate(task._id)}>Save</button>
                    <button className="btn cancel" onClick={() => setEditingTaskId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <span className={`badge ${task.sentiment?.toLowerCase() || "neutral"}`}>
                    {task.priority ? ` ${task.priority}` : ""}
                  </span>
                  <div className="btn-group">
                    <button className="btn edit" onClick={() => handleEdit(task)}>Edit</button>
                    <button className="btn delete" onClick={() => handleDelete(task._id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
