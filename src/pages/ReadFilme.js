import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MoviesGrid.css";
import ModalEdicao from "./ModalEdicao";

const ReadFilme = ({ showLink = true }) => {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModalEdicao, setShowModalEdicao] = useState(false);

  const handleEditarClick = () => {
    console.log("Clicou em Editar Filme");
    setShowModalEdicao(true);
  };

  const handleExcluir = () => {
    axios
      .delete(`http://localhost:8081/rota-movies/${id}`)
      .then(() => {
        // Navegar para a página inicial após excluir
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        // Lógica para tratamento de erro, se necessário
      });
  };

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
              fontSize: "30px",
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
      <br />
      <br />
      <div style={{ marginTop: "20px" }}>
        <button className="botaoExcluir" onClick={() => setShowModal(true)}>
          Excluir Filme
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="botaoEditar"
          onClick={handleEditarClick}
        >
          Editar Filme
        </button>
      </div>
      {showModalEdicao && (
        <ModalEdicao filme={filme} onClose={() => setShowModalEdicao(false)} />
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p
              style={{
                fontFamily: "Merriweathe, sans-serif",
                fontSize: "30px",
                textAlign: "center",
              }}
            >{`Quer mesmo excluir o filme "${filme.titulo}" ?`}</p>
            <div style={{ marginTop: "20px" }}>
              <button className="botaoExcluir" onClick={handleExcluir}>
                Excluir
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="botaoExcluir"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showModalEdicao && (
        <ModalEdicao
          filme={filme}
          onClose={() => setShowModalEdicao(false)}
          onEdit={() => {
            // Lógica para recarregar os dados após a edição, se necessário
          }}
        />
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ReadFilme;
