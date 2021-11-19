import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Api from '../../api/api';

const View = () => {
    const [tarefa, setTarefa] = useState({});

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

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-6">
                    <div className="card my-5">
                        <h1 className="text-center my-4"><b>Titulo</b>{tarefa.titulo}</h1>
                        <div className="btn-group mt-3 w-100">
                            <Link to={`edit/${tarefa._id}`}></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )



}

export default View