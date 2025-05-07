import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://imdb-clone-backend-o1bt.onrender.com/reg", {
        username,
        email,
        password,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            message: "Signup failed! Please check your credentials.",
            details: error.message,
          },
        });
      });
  };

  return (
    <div className="container">
      <div className="title">
        <img src={logo} alt="IMDb Logo" className="logo" />
        <p>📽️ Your Ultimate Movie Encyclopedia....</p>
      </div>

      <div className="login-box">
        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Create Your Account</h3>

          <label htmlFor="username">User Name</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-button">
            Register
          </button>
        
        </form>
        <div className="flex-row">
            <p className="p-login">Already Registered?? </p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="login-button"
            >
              Login
            </button>
          </div>
      </div>
    </div>
  );
};

export default Register;
