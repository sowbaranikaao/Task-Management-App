import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import TaskTable from "../components/TaskTable";

export default function Home() {
  const { tasks, deleteTask } = useTasks();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const perPage = 5;
  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-white/40">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700 drop-shadow">
            Task Manager Dashboard
          </h1>

          <Link
            to="/create"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
          >
            + Add Task
          </Link>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <TaskTable tasks={paginated} onDelete={deleteTask} />

        <Pagination
          current={page}
          total={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
