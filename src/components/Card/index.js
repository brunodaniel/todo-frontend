import React from 'react'
import './index.css';

const Card = (props) => {
  const tarefa = props.data;
  return (
    <div className="col" key="id">
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">Tarefa 1</h5>
          <p className="card-text">Descrição</p>
        </div>
      </div>
    </div>
    
  )
}

export default Card
