import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./MoviesGrid.css";

const ReadFilme = ({ showLink = true }) => {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8081/rota-movies/${id}`)
        .then((res) => {
          setFilme(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const imageUrl = `http://localhost:8081${filme.imagem}`;

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <img
          src={imageUrl}
          alt={filme.titulo}
          style={{
            width: "300px",
            height: "auto",
            margin: "auto",
            marginTop: "50px",
            marginLeft: "200px",
          }}
        />
        <div style={{ marginLeft: "100px", marginRight: "400px", flex: 1 }}>
          <h2
            style={{
              fontFamily: "Merriweathe, sans-serif",
              fontSize: '30px',
              textAlign: "center",
              margin: "8px",
              marginTop: "50px",
            }}
          >
            {filme.titulo}
          </h2>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              textAlign: "justify",
              marginTop: "50px",
            }}
          >
            {filme.sinopse}
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <button >Excluir Filme</button>
        <button  style={{ marginLeft: "10px" }}>
          Editar Filme
        </button>
      </div>

    </div>
  );
};

export default ReadFilme;
