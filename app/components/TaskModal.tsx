"use client";

import { useState } from "react";
import { Task } from "./types/task";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TaskModal({ onSave }: { onSave: (task: Task) => void }) {
  const [open, setOpen] = useState(false);

  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "Todo",
    dueDate: "",
  });

  const handleSubmit = () => {
    if (!task.title) return;

    onSave({
      ...task,
      id: Date.now().toString(),
    });

    setOpen(false);
    setTask({
      id: "",
      title: "",
      description: "",
      status: "Todo",
      dueDate: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Title"
            value={task.title}
            onChange={(e) =>
              setTask({ ...task, title: e.target.value })
            }
          />

          <Input
            placeholder="Description"
            value={task.description}
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
          />

          <Input
            type="date"
            value={task.dueDate}
            onChange={(e) =>
              setTask({ ...task, dueDate: e.target.value })
            }
          />

          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}