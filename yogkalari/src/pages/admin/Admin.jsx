import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("login"); // login → otp → done
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check credentials
    if (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      // Generate 6-digit OTP
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(newOtp);
      setError("");
      setIsLoading(true);

      try {
        // Send OTP to backend via email
        const response = await fetch(import.meta.env.VITE_OTP_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: import.meta.env.VITE_ADMIN_EMAIL,
            otp: newOtp,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStep("otp");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } catch (err) {
        console.error("OTP sending failed:", err);
        setError("Error sending OTP. Please check the server.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Invalid username or password");
    }
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  // ✅ UI for logged-in state
  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-3xl font-semibold text-green-700">
          ✅ Welcome, Admin!
        </h2>
      </div>
    );
  }

  // ✅ UI for login + OTP
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      {step === "login" ? (
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
            disabled={isLoading}
            className={`w-full text-white p-2 rounded transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Sending OTP..." : "Login"}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleOtpVerify}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
          <p className="text-gray-600 mb-4 text-center">
            We’ve sent a 6-digit OTP to your registered <b>email</b>.
          </p>

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter OTP"
          />

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
