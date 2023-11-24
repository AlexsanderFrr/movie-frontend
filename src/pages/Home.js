import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";


const Home = () => {
  const [allfilmes, setFilmes] = useState([]);
  //Listar todos os filmes
  useEffect(() => {
    const fetchAllFilmes = async () => {
      try {
        const res = await axios.get("http://localhost:8081/rota-movies/all");
        setFilmes(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Erro no frontend:", err);
      }
    };
    fetchAllFilmes();
  }, []);
  console.log(allfilmes);
  return (

    <div className="container">
      <h2 className="title">Melhores filmes</h2>


      <div className="movies-container">
        {allfilmes.length > 0 &&
          allfilmes.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
