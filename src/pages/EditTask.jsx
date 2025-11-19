import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import { useTaskForm } from "../hooks/useTaskForm";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const found = tasks.find((t) => t.id === Number(id));

  const { task, setTask, handleChange } = useTaskForm();

  useEffect(() => {
    if (found) {
      setTask(found);
    }
  }, [found]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(found.id, task);
    navigate("/");
  };

  if (!found) return <p className="p-6">Task not found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>

      <TaskForm task={task} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}
