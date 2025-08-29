import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await api.post("/tasks",{title, description});
            onTaskCreated(res.data);
            setTitle("");
            setDescription("");
        }catch(err){
            console.error("Error adding task:", err);
        }
    };
    return (
        <form onSubmit={handleSubmit} className = "p-4 border rounded mb-4">
            <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className = "border p-2 mr-2"
            required
            />
            <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            className = "border p-2 mr-2"
            required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </form>
    )
}