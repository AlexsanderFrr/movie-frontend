import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, showLink = true }) => {
  const imageUrl = `http://localhost:8081${movie.imagem}`; // Ajuste o caminho conforme necessário

  console.log("Dados da imagem:", imageUrl);

  return (
    <div
      className="movie-card"
      style={{ maxWidth: "350px", borderRadius: "10px", overflow: "hidden" }}
    >
      <img
        src={imageUrl}
        alt={movie.titulo}
        style={{
          width: "250px",
            height: "auto",
            margin: "auto",
          marginTop: "8px",
        }}
      />
      <h3
        style={{
          fontFamily: "Merriweathe, sans-serif",
          textAlign: "center",
          fontSize: "22px",
          marginTop: "8px",
        }}
      >
        {movie.titulo}
      </h3>
      {/*<p style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'justify', fontSize: '14px', marginTop: '20px' }}>{movie.sinopse}</p>*/}
      <div
        className="movie-details"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {showLink && <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>}
      </div>
    </div>
  );
};

export default MovieCard;
