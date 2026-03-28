"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskTable from "../components/TaskTable";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <TaskTable />
    </div>
  );
}