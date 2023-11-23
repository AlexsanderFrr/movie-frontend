import React, { useState } from "react";
import axios from "axios";
import { LiaFileUploadSolid } from "react-icons/lia";
import "./CadastroFilme.css";

const CadastroFilme = () => {
  const [filme, setFilme] = useState({
    titulo: "",
    sinopse: "",
    imagem: null,
    data_lancamento: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilme({ ...filme, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFilme({ ...filme, imagem: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("titulo", filme.titulo);
    formData.append("sinopse", filme.sinopse);
    formData.append("imagem", filme.imagem);
    formData.append("data_lancamento", filme.data_lancamento);

    try {
      await axios.post("http://localhost:8081/rota-movies/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Filme cadastrado com sucesso!");
    } catch (error) {
      console.error(
        "Erro ao cadastrar o filme:",
        error.message,
        error.response?.data
      );
    }
  };

  return (
    <div className="cadastro-filme-container">
      <h1>Cadastro de Filme</h1><br/>
      <form onSubmit={handleSubmit} className="cadastro-filme-form">
        <label>
          Título:
          <input
            type="text"
            name="titulo"
            value={filme.titulo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sinopse:
          <textarea
            name="sinopse"
            value={filme.sinopse}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <div className="upload-container">
            <LiaFileUploadSolid />
            <input type="file" name="imagem" onChange={handleFileChange} />
          </div>
        </label>
        {filme.imagem && (
          <div className="image-preview">
            <img
              src={URL.createObjectURL(filme.imagem)}
              alt="Preview da Imagem"
              style={{ maxWidth: "100px" }}
            />
          </div>
        )}
        <br />
        <label>
          Data de Lançamento:
          <input
            type="date"
            name="data_lancamento"
            value={filme.data_lancamento}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className='button'>Cadastrar Filme</button>
      </form>
    </div>
  );
};

export default CadastroFilme;
