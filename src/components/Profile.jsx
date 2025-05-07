import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [editedMovie, setEditedMovie] = useState({});

  // Fetch user's movies
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:10000/api/user-movies/${userid}`);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching user movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userid) fetchMovies();
  }, [userid]);

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // Open edit form
  const handleEditClick = (movie) => {
    setEditingMovieId(movie._id);
    setEditedMovie({
      title: movie.title,
      releaseDate: movie.releaseDate.slice(0, 10),
      genre: movie.genre,
      overview: movie.overview,
      actors: movie.actors,
      producers: movie.producers,
      photolink: movie.photolink,
      vote: movie.vote,
    });
  };

  // Handle form input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit edited movie
  const handleEditSubmit = async (e, movieId) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:10000/api/movies/${movieId}`, editedMovie);
      await fetchMovies();
      setEditingMovieId(null);
      alert("Movie updated successfully!!👍🏻");
    } catch (error) {
      console.error("Error updating movie:", error);
      alert("Failed to update movie 😔👎🏼");
    }
  };

  // Delete a movie
  const handleDelete = async (movieId) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await axios.delete(`http://localhost:10000/api/movies/${movieId}`);
        await fetchMovies();
        alert("Movie deleted successfully!👍🏻");
      } catch (error) {
        console.error("Error deleting movie:", error);
        alert("Failed to delete movie");
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-header">
          <h1>Welcome, <span className="username">{username}</span>!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>

        <div className="movies-section">
          <h2>Your Movies</h2>
          {loading ? (
            <p>Loading your movies...</p>
          ) : movies.length > 0 ? (
            <div className="movies-grid">
              {movies.map((movie) => (
                <div key={movie._id} className="movie-card">
                  <img 
                    src={movie.photolink || "/default-image.jpg"}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <h3 className="movie-detail">{movie.title}</h3>
                  <p className="movie-detail">{movie.releaseDate.slice(0, 10)} | {movie.genre}</p>
                  <p className="movie-description">{movie.overview?.slice(0, 100)}...</p>

                  <div className="movie-actions">
                    <button onClick={() => handleEditClick(movie)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(movie._id)} className="delete-button">Delete</button>
                  </div>

                  {/* Edit Form under each movie */}
                  {editingMovieId === movie._id && (
                    <form onSubmit={(e) => handleEditSubmit(e, movie._id)} className="edit-form">
                      <input
                        type="text"
                        name="title"
                        value={editedMovie.title}
                        onChange={handleEditChange}
                        placeholder="Title"
                        required
                      />
                      <input
                        type="date"
                        name="releaseDate"
                        value={editedMovie.releaseDate}
                        onChange={handleEditChange}
                        required
                      />
                      <input
                        type="text"
                        name="genre"
                        value={editedMovie.genre}
                        onChange={handleEditChange}
                        placeholder="Genre"
                        required
                      />
                      <textarea
                        name="overview"
                        value={editedMovie.overview}
                        onChange={handleEditChange}
                        placeholder="Overview"
                        required
                      ></textarea>
                      <input
                        type="text"
                        name="actors"
                        value={editedMovie.actors}
                        onChange={handleEditChange}
                        placeholder="Actors"
                      />
                      <input
                        type="text"
                        name="producers"
                        value={editedMovie.producers}
                        onChange={handleEditChange}
                        placeholder="Producers"
                      />
                      <input
                        type="text"
                        name="photolink"
                        value={editedMovie.photolink}
                        onChange={handleEditChange}
                        placeholder="Photo Link"
                      />
                      <input
                        type="number"
                        name="vote"
                        value={editedMovie.vote}
                        onChange={handleEditChange}
                        placeholder="Vote"
                      />
                      <button type="submit" className="save-button">Save Changes</button>
                    </form>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>You haven't added any movies yet.</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
