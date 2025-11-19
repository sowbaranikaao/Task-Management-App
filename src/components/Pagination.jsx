import React from "react";

export default function Pagination({ current, total, onPageChange }) {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>

      <span className="font-medium">
        {current} / {total}
      </span>

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}
