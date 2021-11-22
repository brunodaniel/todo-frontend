import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const Cadastro = () => {
  
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);
  
  useEffect(() =>{
    AbreModal();
  }, [])

  const handleSubmit = async (evento) => {
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

    const request = await Api.fetchPost(tarefa);
    if(request.status === 500) {
      alert("ERRO NO SERVIDOR");
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
    
  }

  return (
    <div className="container">
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <div className="card mt-4">
          <div className="card-title">
            <div className="row">
              
              <form onSubmit={handleSubmit}>
                <div className="form-group col-auto">
                  <label className="form mb-1" htmlFor="titulo">Titulo</label>
                  <input type="text" className="col-xs-3 form-control mb-3" id="titulo" placeholder="Titulo" name="titulo"></input>
                </div>
                <div className="form-group col-auto">
                  <label className="form mb-1" htmlFor="prioridade">Prioridade</label>
                  <select className="form-control mb-3" id="prioridade" name="prioridade">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                  </select>
                </div>
                <div className="form-group col-auto">
                  <label className="form mb-1" htmlFor="status">Status</label>
                    <select className="form-control mb-3" id="status" name="status">
                      <option>Fazer</option>
                      <option>Fazendo</option>
                      <option>Feito</option>
                  
                    </select>
                </div>
                <div className="form-group col-auto">
                  <label className="form mb-1" htmlFor="prazo">Prazo</label>
                  <input type="date" id="prazo" className="form-control mb-3" name="prazo"/>
                </div>
                <div className="form-group col-auto">
                <label htmlFor="descricao">Descrição</label>
                
                <textarea className="form-control mb-3" id="descricao" rows="3" name="descricao"></textarea>
                </div>

                <button type="submit" className ="btn btn-primary">Enviar</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
                
              </form>
              
             </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Cadastro
