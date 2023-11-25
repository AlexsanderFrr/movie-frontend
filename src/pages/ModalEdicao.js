// ModalEdicao.js
import React, { useState } from "react";
import axios from "axios";
import "./MoviesGrid.css";

const ModalEdicao = ({ filme, onClose, onEdit }) => {
    console.log("ModalEdicao renderizado");
  const [filmeEditado, setFilmeEditado] = useState({
    titulo: filme.titulo,
    sinopse: filme.sinopse,
    imagem: null,
    data_lancamento: filme.data_lancamento,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilmeEditado({ ...filmeEditado, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFilmeEditado({ ...filmeEditado, imagem: file });
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    console.log("Submetendo formulário de edição...");
    const formData = new FormData();
    formData.append("titulo", filmeEditado.titulo);
    formData.append("sinopse", filmeEditado.sinopse);
    formData.append("imagem", filmeEditado.imagem);
    formData.append("data_lancamento", filmeEditado.data_lancamento);

    try {
      await axios.put(`http://localhost:8081/rota-movies/${filme.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Filme atualizado com sucesso!");
      onEdit(); // Callback para atualizar a página ou os dados conforme necessário
      onClose(); // Fechar o modal após a edição
    } catch (error) {
      console.error(
        "Erro ao atualizar o filme:",
        error.message,
        error.response?.data
      );
    }
  };

  return (
    <div className="modal-edicao">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Editar Filme</h2><br/>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={filmeEditado.titulo}
              onChange={handleInputChange}
            />
          </label>
          <br /><br/>
          <label>
            Sinopse:
            <textarea
              name="sinopse"
              value={filmeEditado.sinopse}
              onChange={handleInputChange}
            />
          </label>
          <br /><br/>
          <label>
            Imagem:
            <input
              type="file"
              name="imagem"
              onChange={handleFileChange}
            />
          </label>
          {filmeEditado.imagem && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(filmeEditado.imagem)}
                alt="Preview da Imagem"
                style={{ maxWidth: "100px" }}
              />
            </div>
          )}
          <br /><br/>
          <label>
            Data de Lançamento:
            <input
              type="date"
              name="data_lancamento"
              value={filmeEditado.data_lancamento}
              onChange={handleInputChange}
            />
          </label>
          <br/>
          <button type="submit" className="botaoEditar">
            Atualizar Filme
          </button>
          <button type="button" className="botaoEditar" onClick={onClose} >
                        Cancelar
                    </button>
          
        </form>
      </div>
    </div>
  );
};

export default ModalEdicao;
