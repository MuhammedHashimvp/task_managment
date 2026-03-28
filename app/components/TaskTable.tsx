"use client";

import { useState } from "react";
import useTasks from "../api/Mockapi";
import TaskModal from "./TaskModal";
import FilterBar from "./FilterBar";

export default function TaskTable() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filtered = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (status ? t.status === status : true))
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <FilterBar setSearch={setSearch} setStatus={setStatus} />
        <TaskModal onSave={addTask} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="border rounded-xl p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-500">
              {task.description}
            </p>

            <p className="mt-2 text-sm">
              📅 {task.dueDate}
            </p>

            <select
              className="mt-2 border p-1 rounded"
              value={task.status}
              onChange={(e) =>
                updateTask({
                  ...task,
                  status: e.target.value as any,
                })
              }
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <button
              onClick={() => deleteTask(task.id)}
              className="mt-3 text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}