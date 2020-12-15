import {React, Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BaseConnection from "../Config/BaseConnection";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', username: '', password: ''};
  }

  // FUNCTION TO CREATE USER
  handleSubmit = (event) => {
    event.preventDefault()
    BaseConnection.post('/users', this.state).then((response) => {

      alert("Usuário criado com sucesso!")
      console.log(response.data)

    }).catch((err) => {
      alert("Ocorreu algo de errado! Tente novamente!")
    })
  }

  validateForm() {
    return this.state.name.length > 0 
    && this.state.username.length > 0 
    && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="ContainerForm">
      <Form onSubmit={this.handleSubmit}>

      <Form.Group controlId="name">
        <Form.Label>Nome:</Form.Label>
        <Form.Control
            type="name"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}/>
        </Form.Group>

       <Form.Group controlId="username">
        <Form.Label>Nome de Usuário:</Form.Label>
        <Form.Control
            type="username"
            value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Senha:</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}/>
        </Form.Group>

        <Button type="submit" block size="lg" disabled={!this.validateForm()}>
          Cadastrar
        </Button>

      </Form>
      </div>
    );
  }
}

export default SignUpForm;