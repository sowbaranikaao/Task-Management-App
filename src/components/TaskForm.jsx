import React from "react";

export default function TaskForm({ task, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/70 backdrop-blur-xl shadow-xl border border-white/40 p-6 rounded-2xl space-y-4"
    >
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={onChange}
          className="border p-3 w-full rounded-xl shadow focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-gray-700">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={onChange}
          className="border p-3 w-full rounded-xl shadow focus:ring-2 focus:ring-purple-400 outline-none"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-xl shadow hover:scale-[1.02] transition"
      >
        Save Task
      </button>
    </form>
  );
}
