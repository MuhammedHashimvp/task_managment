"use client";

import { useState } from "react";
import { Task } from "../types/task";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  onSave: (task: Task) => void;
  editTask?: Task | null;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function TaskModal({
  onSave,
  editTask,
  open,
  setOpen,
}: Props) {
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "Todo",
    dueDate: "",
  });

  const handleOpenChange = (value: boolean) => {
    if (value) {
      if (editTask) {
        setTask(editTask);
      } else {
        setTask({
          id: "",
          title: "",
          description: "",
          status: "Todo",
          dueDate: "",
        });
      }
    }
    setOpen(value);
  };

  const handleSubmit = () => {
    if (!task.title.trim()) {
      toast.error("Title is required");
      return;
    }

    onSave({
      ...task,
      id: task.id || Date.now().toString(),
    });

    toast.success(editTask ? "Task updated" : "Task created");

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle>
            {editTask ? "Edit Task" : "Create Task"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
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

          <div className=" gap-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {editTask ? "Update Task" : "Save Task"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}