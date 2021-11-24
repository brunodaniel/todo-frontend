import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';


const Header = () => {


    return(
      <Navbar bg="navbar  navbar-expand-lg navbar-light bg-primary w-100" expand="lg">
      <Container>
        <Navbar.Brand href="/">ToDo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="/">Home</Nav.Link>
            <Nav.Link className="active" href="/cadastro">Cadastro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )


}

export default Header;
