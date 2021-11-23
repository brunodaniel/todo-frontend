import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const Card = (props) => {
  const tarefa = props.data;
  return (
    
    <Link to={`/view/${tarefa._id}`} className="col" style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{tarefa.titulo}</h5>      
          <Badge bg="primary">{tarefa.status}</Badge>
          <Badge bg="primary badge">{tarefa.prioridade}</Badge>
          <p className="card-text">Descrição: {tarefa.descricao}</p>
        </div>
      </div>
    </Link>
    
    
  )
}

export default Card
