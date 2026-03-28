"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskTable from "../components/TaskTable";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn =
      typeof window !== "undefined" &&
      sessionStorage.getItem("token") ==="logged_in";

    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track your tasks efficiently
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <TaskTable />
        </div>

      </main>
    </div>
  );
}