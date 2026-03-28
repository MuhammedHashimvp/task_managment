"use client";

import { useState } from "react";
import useTasks from "../api/Mockapi";
import TaskModal from "./TaskModal";
import FilterBar from "./FilterBar";
import { Task } from "../types/task";

export default function TaskTable() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [open, setOpen] = useState(false);

  const filteredTasks = tasks
    .filter((t: Task) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t: Task) => (status ? t.status === status : true))
    .sort((a: Task, b: Task) => {
      if (!sort) return 0;
      return sort === "asc"
        ? a.dueDate.localeCompare(b.dueDate)
        : b.dueDate.localeCompare(a.dueDate);
    });

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <FilterBar
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          sort={sort}
          setSort={setSort}
        />

        <button
          onClick={() => {
            setEditingTask(null);
            setOpen(true);
          }}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          AddTask
        </button>
      </div>

      {/* Modal */}
      <TaskModal
        open={open}
        setOpen={setOpen}
        editTask={editingTask}
        onSave={(task) => {
          if (editingTask) {
            updateTask(task);
            setEditingTask(null);
          } else {
            addTask(task);
          }
        }}
      />

      {/* Empty State */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12 border rounded-xl bg-gray-50">
          <p className="text-gray-500 text-lg">
            No tasks found
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task: Task) => (
            <div
              key={task.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {task.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {task.description || "No description"}
              </p>

              {/* Date */}
              <p className="text-xs text-gray-400 mb-4">
                {task.dueDate || "No due date"}
              </p>

              {/* Status */}
              <div className="flex items-center justify-between">
                <select
                  className={`text-sm px-2 py-1 rounded-md border ${getStatusColor(
                    task.status
                  )}`}
                  value={task.status}
                  onChange={(e) =>
                    updateTask({
                      ...task,
                      status: e.target.value as Task["status"],
                    })
                  }
                >
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => {
                    setEditingTask(task);
                    setOpen(true);
                  }}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm font-medium text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}