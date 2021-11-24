import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './View.css';

const View = () => {
    const [tarefa, setTarefa] = useState({});

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const AbreModal = () => setOpen(true);
    const FechaModal = () => setOpen(false);

    useEffect(() =>{
        getTarefaById();
    }, [])

    const {id} = useParams();
    console.log(id);

    const getTarefaById = async () => {
        const request = await Api.fetchGetById(id);
        const tarefa = await request.json();
        setTarefa(tarefa);
    }
    
    const handleDelete = async() => {
        const response = await Api.fetchDelete(id);
        const data = await response.json();
        if(data.message) {
          console.log('excluido', data.message);
          navigate('/');
        }else {
          alert(data.error);
        }
    }

    

    return(


        <div className="container">
            <div className="row my-5 offset-md-4">
                <div className="col-6">
                    <div className="card my-5 ">
                        <h1 className="text-center my-4"><b>{tarefa.titulo}</b></h1>
                        <p className="text"><b>Prazo: </b>{tarefa.prazo}</p>
                        <p className="text"><b>Prioridade: </b>{tarefa.prioridade}</p>
                        <p className="text"><b>Status: </b>{tarefa.status}</p>
                        <p className="text"><b>Descrição:</b> {tarefa.descricao}</p>
                        <div className="btn-group mt-3 w-100">
                            <Link to={`/edit/${tarefa._id}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={AbreModal}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
                <h2 className="my-4">Deseja Realmente Excluir ?</h2>
                <div className="d-flex w-50 mx-auto justify-content-around">
                    <button className="btn btn-danger mr-2" onClick={FechaModal}>Não</button>
                    <button className="btn btn-success" onClick={handleDelete}>Sim</button>
                </div>
            </Modal>
        </div>

    )



}

export default View