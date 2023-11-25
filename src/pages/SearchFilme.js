import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const SearchFilme = ({ title }) => {
  const [searchedFilmes, setSearchedFilmes] = useState([]);

  useEffect(() => {
    const fetchSearchedFilmes = async () => {
      try {
        if (title) { // Certifique-se de que title não seja undefined ou vazio
          const res = await axios.get(`http://localhost:8081/rota-movies/title/${title}`);

          setSearchedFilmes(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log("Erro no frontend:", err);
      }
    };

    fetchSearchedFilmes();
  }, [title]);

  return (
    <div className="container"  style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }} >
      <h2 className="title">Resultados da Busca</h2>

      <div className="movies-container">
        {searchedFilmes.length > 0 ? (
          searchedFilmes.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default SearchFilme;
