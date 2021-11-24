import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/api";
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    getTarefaById();
  }, [])

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {

    const campos = { ...tarefa }
    campos[evento.target.name] = evento.target.value;

    console.log(campos);
    setTarefa(campos);

  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(tarefa);
    const request = await Api.fetchPut(tarefa,id);
    const response = await request.json();
    alert(response.message);
    navigate(`/view/${id}`);


  }

  const voltar = () => {
    navigate(`/view/${id}`);
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3">Edição da tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Titulo da Tarefa:</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Titulo da tarefa"
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
                    name="titulo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="autor">Prioridade:</label>
                  <select
                    id="prioridade"
                    type="text"
                    className="form-control"
                    placeholder="Prioridade"
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    name="prioridade"
                    >
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                    </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Status:</label>
                  <select
                    id="status"
                    type="text"
                    className="form-control"
                    value={tarefa.status}
                    onChange={handleFieldsChange}
                    placeholder="status"
                    name="status"
                  >
                    <option>Fazer</option>
                    <option>Fazendo</option>
                    <option>Feito</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="capa">Prazo:</label>
                  <input
                    id="prazo"
                    type="date"
                    value={tarefa.prazo}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="prazo da tarefa"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="duracao">Descrição:</label>
                  <input
                    id="descricao"
                    type="text"
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Descrição"
                    name="descricao"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                <button type="button" className="btn btn-danger" onClick={voltar}>
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
