import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // alert("Login successfully");
      setError("");
      onLoginSuccess(); // Notify krga app to switch screen
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="container">
      <div className="icon-circle">
        <img src="electric-bike.png" alt="Bike Icon" className="bike-logo" />
      </div>

      <h1>BikeVision</h1>
      <p className="description">Sign in to your fleet management dashboard</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && <p className="note" style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="submit-btn"> Sign In </button>
      </form>
    </div>
  );
}
