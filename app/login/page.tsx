"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      router.replace("/");
    }
  }, [router]);

  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      sessionStorage.setItem("token", "logged_in");
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-8">
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleLogin}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
}