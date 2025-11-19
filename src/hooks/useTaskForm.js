import { useState } from "react";

export function useTaskForm(initial = { title: "", status: "pending" }) {
  const [task, setTask] = useState(initial);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return { task, setTask, handleChange };
}
