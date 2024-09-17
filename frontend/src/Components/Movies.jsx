import React, { useState } from "react";

// Importeren van onze movies data
import moviesData from "../utils/movies.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Movies = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const mainDivCSS =
    "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 width justify-items-center gap-0 margin-bottom-0 ";

  // Filter films op basis van zoekterm
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase() )
  );

  return (
    <>
      <div className="search-veld">
        <input
          type="text"
          placeholder  ="Zoek hier naar je film" 
          color="white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className={mainDivCSS}>
        {filteredMovies.map((movie) => (
          <div
            onClick={() => {
              navigate(`/movies/${movie.id}`);
            }}
            key={movie.id}
            className="cursor-pointer"
          >
            <img className="images" src={movie.thumbnail} alt={movie.name} />
            <p className="font-semibold text-center mt-2 ">{movie.title}</p>
            <p className="description">{movie.year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
