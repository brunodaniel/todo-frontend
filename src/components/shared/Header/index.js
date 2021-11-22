import React from 'react'
import Cadastro from '../../../pages/Cadastro/Cadastro'


const Header = () => {


    return(
        <nav className="navbar  navbar-expand-lg navbar-light bg-primary w-100">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" to="/">ToDo List</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active">Home</a>                  
              </li>
              <li className="nav-item">
                  <a className="nav-link active" href="/cadastro">Cadastro</a>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
    )


}

export default Header;
