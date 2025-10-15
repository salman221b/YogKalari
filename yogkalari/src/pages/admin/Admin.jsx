import React, { useState } from "react";
import Product from "./Product";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      setError("");
      setIsLoggedIn(true); // ✅ login successful
    } else {
      setError("Invalid username or password");
    }
  };

  // UI for logged-in state
  if (isLoggedIn) {
    return (
      <div className="">
        <h2 className="flex items-center justify-center pt-30 text-3xl font-semibold text-[#084C2E] font-primary">
          Welcome, Admin!
        </h2>
        <Product />
      </div>
    );
  }

  // UI for login form
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter username"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter password"
        />

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
