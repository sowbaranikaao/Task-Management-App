import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-6">
      <FiSearch className="absolute top-3 left-3 text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
      />
    </div>
  );
}
