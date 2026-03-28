"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
};

export default function FilterBar({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full">
      
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-md px-3 py-2 w-full md:w-1/3"
      />

      {/* 📌 Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-md px-3 py-2 w-full md:w-1/4"
      >
        <option value="">All Status</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {/* ⏳ Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-md px-3 py-2 w-full md:w-1/4"
      >
        <option value="">Sort by</option>
        <option value="asc">Due Date ↑</option>
        <option value="desc">Due Date ↓</option>
      </select>
    </div>
  );
}