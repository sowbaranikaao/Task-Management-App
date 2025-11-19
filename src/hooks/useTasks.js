import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
  };

  const updateTask = (id, updated) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask };
}
