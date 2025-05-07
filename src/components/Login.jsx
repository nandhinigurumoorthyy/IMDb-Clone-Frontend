import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://imdb-clone-backend-o1bt.onrender.com/", {
        email,
        password,
      })
      .then((res) => {
        console.log("Login response:", res);
    
        if (res.data && res.data.user) {
          const user = res.data.user; 
    
          localStorage.setItem("userid", user.userid); 
          localStorage.setItem("userEmail", user.email); 
          localStorage.setItem("username", user.username);
    
          console.log("Stored Username:", localStorage.getItem("username")); // Debugging
    
          navigate("/home"); // Redirect to home page
        } else {
          navigate("/error", {
            state: { message: "Unexpected server response. Please try again later." },
          });
        }
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            message: "Login failed! Please check your credentials.",
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
          <h3>Log In</h3>

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

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        <div className="flex-row">
          <p className="p-login">Don't have an account?? </p>
          <button
            type="button"
            onClick={() => navigate("/reg")}
            className="signup-btn"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
