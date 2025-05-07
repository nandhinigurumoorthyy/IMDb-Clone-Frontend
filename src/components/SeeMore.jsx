import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Load from "./Load";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SeeMore = () => {
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id.length === 24) {
          // 🔥 It's a MongoDB ID (24 characters)
          const { data: movieData } = await axios.get(`https://imdb-clone-backend-o1bt.onrender.com/moviedetails/${id}`);
          setDetails(movieData);
          setCredits(null); // No credits for MongoDB
        } else {
          // 🔥 It's a TMDB movie ID
          const { data: movieData } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d4b4a1d5d71f6dcff27a1e5652668119`
          );
          setDetails(movieData);

          const { data: creditData } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d4b4a1d5d71f6dcff27a1e5652668119`
          );
          setCredits(creditData);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) {
    return <Load />;
  }

  const actors = credits?.cast?.slice(0, 5).map(actor => actor.name).join(", ") || details.actors;
  const producers = credits?.crew?.filter(member => member.job === "Producer").map(p => p.name).join(", ") || details.producers;
  const genres = details.genres ? details.genres.map(g => g.name).join(", ") : (details.genre || "N/A");

  return (
    <>
    <NavBar/>
    <div className="see-more-container">
      <div className="see-more-content">
        <div className="see-more-poster">
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w300/${details.poster_path}`
                : details.photolink|| "/fallback-image.png" || details.photolink 
            }
            alt={details.title || details.original_title}
          />
        </div>

        <div className="see-more-info">
          <h1 className="movie-titlee">
            {details.title || details.original_title} 
            <span className="release-year"> ({(details.releaseDate || details.release_date)?.split("-")[0]})</span>
          </h1>

          {details.tagline && <p className="tagline">{details.tagline}</p>}

          <p className="overview">{details.overview}</p>

          <p><strong>Genre:</strong> {genres ||details.genre || details.media_type}</p>
          <p><strong>Language:</strong> {details.original_language?.toUpperCase() || "N/A"}</p>
          <p><strong>Actors:</strong> {actors || "N/A" || details.actors}</p>
          <p><strong>Producers:</strong> {producers || "N/A" || details.producers}</p>
          <p><strong>Rating:</strong> {details.vote_average || "N/A" || details.vote} %</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SeeMore;
