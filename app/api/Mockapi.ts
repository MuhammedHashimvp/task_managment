"use client";

import { useState } from "react";
import { Task } from "../types/task";

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Sample Task",
      description: "This is a demo task",
      status: "Todo",
      dueDate: "2026-04-01",
    },
  ]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (task: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? task : t))
    );
  };

  return { tasks, addTask, deleteTask, updateTask };
}