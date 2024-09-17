import React from "react";
import { useParams } from "react-router-dom";
import "../pages/DetailPage.css";
import moviesData from "../utils/movies.json";
import SeatsComponent from "../components/SeatsComponent";

const DetailPage = () => {
  const { id } = useParams();
  const movies = moviesData.find((r) => r.id === Number.parseInt(id));

  

  return (
    <div className="mainScreen">
       <h1 className="movie-title">
          {movies.title} ({movies.year})
        </h1>
    <div className="detail-container">
      
        <img src={movies.thumbnail} alt={movies.title} />

        <div className="movie-info">
        <strong className="info-label">Plot</strong>
          <p className="plot-summary">{movies.extract}</p>
        
        <strong className="info-label">Genres</strong>
          {movies.genres.map((genre) => (
            <p className="genre" key={genre}>
              {genre}
            </p>
          ))}
          <strong className="info-label">Cast</strong>
          {movies.cast.map((actor) => (
            <p className="cast-member" key={actor}>
              {actor}
            </p>
          ))}

         
</div>
          
      </div>
      <div className="screen2">
      <SeatsComponent></SeatsComponent>
          </div>
          </div>
      
  );
};

export default DetailPage;
