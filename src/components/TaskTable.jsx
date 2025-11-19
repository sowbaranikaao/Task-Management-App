import React from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ tasks, onDelete }) {
  const formatDate = (iso) => new Date(iso).toLocaleString();

  const statusBadge = {
    pending: "bg-yellow-100 text-yellow-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="overflow-x-auto mt-4 rounded-xl shadow-xl bg-white/80 backdrop-blur border border-white/40">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Title</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
            <th className="px-4 py-3 text-left font-semibold">Created</th>
            <th className="px-4 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="text-center py-8 text-gray-600"
              >
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{task.title}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusBadge[task.status]}`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="px-4 py-3">{formatDate(task.createdAt)}</td>

                <td className="px-4 py-3 flex gap-2">
                  <Link
                    to={`/edit/${task.id}`}
                    className="px-3 py-1 border rounded-lg text-blue-600 hover:bg-blue-50 transition shadow-sm"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onDelete(task.id)}
                    className="px-3 py-1 border rounded-lg text-red-600 hover:bg-red-50 transition shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
