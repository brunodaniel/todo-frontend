import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const tarefa = props.data;
  return (
    
    <Link to={`/view/${tarefa._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{tarefa.titulo}</h5>
          <p className="card-text">{tarefa.descricao}</p>
        </div>
      </div>
    </Link>
    
    
  )
}

export default Card
