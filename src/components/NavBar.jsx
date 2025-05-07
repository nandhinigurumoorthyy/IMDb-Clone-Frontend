import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [query, setQuery] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    } else {
      alert("Please fill all the details !!!");
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-box">
          <img src={logo} className="logo-icon" onClick={() => navigate("/home")} style={{cursor:"pointer"}}/>
          <h1 className="logo-text">Search, Discover, and Love Your Favorite Movies and Stars....</h1>
        </div>

        <div className="navbar">
  

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              value={query}
              placeholder="Search..."
              required
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
        
            <button type="submit" className="search-button">
              Submit
            </button>
          </form>
          <div>
            <CgProfile className="profile"    onClick={() => navigate("/profile")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
