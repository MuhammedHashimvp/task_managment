"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 border rounded-lg">
        <h1 className="text-xl mb-4">Login</h1>
        <input
          type="text"
          placeholder="Enter email"
          className="border p-2 mb-3 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
          Login
        </button>
      </div>
    </div>
  );
}