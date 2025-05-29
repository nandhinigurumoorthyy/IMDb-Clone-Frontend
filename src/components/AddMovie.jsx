import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    releaseDate: "",
    genre: "",
    overview: "",
    actors: "",
    producers: "",
    photolink: "",
    vote: "",
    lang:""
  });
    const navigate = useNavigate();
  

  const userId = localStorage.getItem("userid");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const moviePayload = { ...movieData, userId };

    try {
      await axios.post("https://imdb-clone-backend-o1bt.onrender.com/createnewmovie", moviePayload);
      alert("Success!! Your movie has been added. Head to your profile to edit or update it anytime..💖");
      setMovieData({
        title: "",
        releaseDate: "",
        genre: "",
        overview: "",
        actors: "",
        producers: "",
        photolink: "",
        vote: "",
        lang:""
      });
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div >  <NavBar/> <div className="addmovie-margin"><div className="add-movie-container">
      <h2>🎥  Add New Movie</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        {/* Movie Basic Details */}
        <div className="input-group">
          <label>Movie Title</label>
          <input
            type="text"
            value={movieData.title}
            placeholder="GBU"
            onChange={(e) =>
              setMovieData({ ...movieData, title: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <label>Release Date</label>
          <input
            type="date"
            value={movieData.releaseDate}
            onChange={(e) =>
              setMovieData({ ...movieData, releaseDate: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Comedy"
            value={movieData.genre}
            onChange={(e) =>
              setMovieData({ ...movieData, genre: e.target.value })
            }
            required
          />
        </div>

      <div className="input-group">
          <label>Language</label>
          <input
            type="text"
            value={movieData.lang}
            placeholder="Tamil"
            onChange={(e) =>
              setMovieData({ ...movieData, lang: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <label>Overview</label>
          <textarea
          placeholder="A former gangster is reformed...."
            value={movieData.overview}
            onChange={(e) =>
              setMovieData({ ...movieData, overview: e.target.value })
            }
            required
          />
        </div>

        {/* Actor Selection */}
        <div className="input-group">
          <label>Actor</label>
          <input
            type="text"
            placeholder="Type Actor Name"
            onChange={(e) =>
              setMovieData({ ...movieData, actors: e.target.value })
            }
            required
          />
        </div>

        {/* Producer Selection */}
        <div className="input-group">
          <label>Producer</label>
          <input
            type="text"
            placeholder="Type Producer Name"
            onChange={(e) =>
              setMovieData({ ...movieData, producers: e.target.value })
            }
            required
          />
        </div>
        <div className="input-group">
          <label>PhotoLink</label>
          <input
            type="text"
            placeholder="https://image.jpg"
            onChange={(e) =>
              setMovieData({ ...movieData, photolink: e.target.value })
            }
            required
          />
        </div>
        <div className="input-group">
          <label>Rating</label>
          <input
            type="number"
            placeholder="9"
            max="10" min="1"
            onChange={(e) =>
              setMovieData({ ...movieData, vote: e.target.value })
            }
            required
          />
        </div>

        <button type="submit" className="create-movie">Create Movie</button>
      </form>
    </div></div> 
    <Footer/></div>

  );
};

export default AddMovie;
