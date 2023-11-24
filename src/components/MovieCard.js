import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, showLink = true }) => {
  const imageUrl = `http://localhost:8081${movie.imagem}`; // Ajuste o caminho conforme necessário

  console.log("Dados da imagem:", imageUrl);

  return (
    <div className="movie-card" style={{ maxWidth: "350px", borderRadius: "10px", overflow: "hidden" }}>
       <h3 style={{ fontFamily: "Merriweathe, sans-serif", textAlign: 'center', fontSize: '22px', marginTop: '8px'  }}>{movie.titulo}</h3>
      <img
        src={imageUrl}
        alt={movie.titulo}
        style={{ maxWidth: "50%",  height: "auto", margin: "auto", marginTop: '8px' }}
      />
      {/*<p style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'justify', fontSize: '14px', marginTop: '20px' }}>{movie.sinopse}</p>*/}
      <div className="movie-details">
        <p>
          <FaStar /> {movie.rate_avg}
        </p>
        {showLink && <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>}
      </div>
    </div>
  );
};

export default MovieCard;
