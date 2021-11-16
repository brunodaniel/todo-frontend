import React from 'react';
import {Form, FormGroup,Label,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';



const Cadastro = () => {
  return (
    <Form>
    <FormGroup className="mb-3" controlId="formBasicEmail">
      <Label>Titulo</Label>
      <Input type="email" placeholder="Titulo da Tarefa" />
     
    </FormGroup>

    <select className="form-control mb-3" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <Button type="submit">
      Submit
    </Button>
    <Link to="/" className="btn btn-danger">Cancel</Link>
  </Form>

  )
}

export default Cadastro
