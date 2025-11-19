import React from "react";
import { useNavigate } from "react-router-dom";
import { useTaskForm } from "../hooks/useTaskForm";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function CreateTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  const { task, handleChange } = useTaskForm({ title: "", status: "pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, createdAt: new Date().toISOString() });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>

      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}
