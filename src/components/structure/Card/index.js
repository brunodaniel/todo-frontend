import React from 'react'
import './index.css';

const Card = (props) => {
  const tarefa = props.data;
  return (
    <div className="col" key={tarefa._id}>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">{tarefa.titulo}</h5>
          <p className="card-text">{tarefa.descricao}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Card
