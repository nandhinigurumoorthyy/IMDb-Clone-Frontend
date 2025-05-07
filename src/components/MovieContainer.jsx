import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Load from "./Load";
import Footer from "./Footer";
import NavBar from './NavBar'

const MovieContainer = () => {
  const [tmdbFilms, setTmdbFilms] = useState([]);
  const [mongoFilms, setMongoFilms] = useState([]);
  const [allFilms, setAllFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { query } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const tmdbResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d4b4a1d5d71f6dcff27a1e5652668119`
        );
        setTmdbFilms(tmdbResponse.data.results || []);
        console.log("TMDB Results:", tmdbResponse.data.results);

        const mongoResponse = await axios.get(
          `http://localhost:10000/movies?query=${query}`
        );
        setMongoFilms(mongoResponse.data.data || []); 
        console.log("MongoDB Results:", mongoResponse.data.data);
      } catch (error) {
        alert("Error fetching movie data!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  useEffect(() => {
    const combinedFilms = [...tmdbFilms, ...mongoFilms];
    const uniqueFilms = combinedFilms.filter(
      (film, index, self) =>
        index ===
        self.findIndex((t) =>
          t.id && film.id
            ? t.id === film.id
            : t.original_title === film.original_title
        )
    );
    setAllFilms(uniqueFilms);
  }, [tmdbFilms, mongoFilms]);

  const totalPages = Math.ceil(allFilms.length / itemsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allFilms.slice(startIndex, endIndex);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Load />
      </div>
    );
  }

  return (
    <>
    <NavBar/>
     <button    type="button"
            onClick={() => navigate("/addnewmovie")} className="add-new-movie">Add New Movie</button>
 
      <div className="movie-container">
        {allFilms.length > 0 ? (
          <>
            <div className="movie-grid">
              {getCurrentPageData().map((movie) => (
                <div key={movie.id || movie._id} className="movie-card">
                  {/* Movie Image */}
                  <div className="movie-image-container">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : `${movie.photolink}` 
                      }
                      className="movie-poster"
                      alt={movie.title || movie.original_title}
                    />
                  </div>

                  {/* Movie Title */}
                  <p className="movie-title">
                    {movie.original_title || movie.title}
                  </p>

                  {/* Movie Year */}
                  <p className="movie-year">
                    {movie.releaseDate
                      ? movie.releaseDate.split("-")[0]
                      : movie.release_date?.split("-")[0]}
                  </p>

                  {/* Vote Average (only for TMDB movies) */}
                  {movie.vote_average && (
                    <p className="movie-vote">
                      Vote: {Math.round(movie.vote_average * 10)}%
                    </p>
                  )}

                  {/* Overview */}
                  <p className="movie-overview">{movie.overview}</p>

                  {/* "See More" Button */}
                  <div className="see-more-button-container">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/moviedetails/${movie._id || movie.id}`)
                      }
                      className="see-more-button"
                    >
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button
                className={`pagination-button ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </button>
              <div className="pagination-info">
                Page {currentPage} of {totalPages}
              </div>
              <button
                className={`pagination-button ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>No movies found for "{query}"</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default MovieContainer;
