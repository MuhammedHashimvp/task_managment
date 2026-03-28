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
      
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 px-3 py-2 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      >
        <option value="">All Status</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      >
        <option value="">Sort by</option>
        <option value="asc">Due Date ↑</option>
        <option value="desc">Due Date ↓</option>
      </select>
    </div>
  );
}