import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';



const Cadastro = () => {

  const handleSubmit = (evento) => {
    evento.preventDefault();

    console.log(evento.target.titulo.value);
    const titulo = evento.target.titulo.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;
    const descricao = evento.target.descricao.value;

    const tarefa = {
      titulo,
      prioridade,
      status,
      prazo,
      descricao,
    }
    
  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col"></div>
        <form onsubmit={handleSubmit}>
        <div className="form-group col">
          <label className="form mb-1" for="titulo">Titulo</label>
          <input type="text" className="col-xs-3 form-control mb-3" id="titulo" placeholder="Titulo" name="titulo"></input>
        </div>
        <div className="form-group col">
          <label className="form mb-1" for="prioridade">Prioridade</label>
          <select className="form-control mb-3" id="prioridade" name="prioridade">
            <option>Baixa</option>
            <option>Media</option>
            <option>Alta</option>

          </select>
        </div>
        <div className="form-group col">
          <label className="form mb-1" for="status">Status</label>
          <select className="form-control mb-3" id="status" name="status">
            <option>Aguardando</option>
            <option>Execução</option>
            <option>Concluido</option>
        
          </select>
        </div>
        <div className="form-group col">
          <label className="form mb-1" for="prazo">Prazo</label>
          <input type="date" id="prazo" className="form-control mb-3" name="prazo"/>
        </div>
        <div className="form-group col">
        <label for="descricao">Descrição</label>
        <textarea class="form-control mb-3" id="descricao" rows="3" name=""descricao></textarea>
        </div>


    
        <button type="submit" className ="btn btn-primary">Enviar</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        
      </form>
      
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cadastro
