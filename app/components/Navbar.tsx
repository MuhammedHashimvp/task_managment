"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      
      <h1
        onClick={() => router.push("/")}
        className="text-xl font-bold text-white cursor-pointer tracking-wide"
      >
        Task Manager
      </h1>

      <div className="flex items-center gap-4">
        
        <button
          onClick={() => router.push("/")}
          className="text-white hover:bg-white/20 px-3 py-1 rounded-md transition"
        >
          Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}