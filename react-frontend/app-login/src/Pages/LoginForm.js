import {React, Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BaseConnection from "../Config/BaseConnection";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  // FUNCTION TO LOGIN
  handleSubmit = (event) => {
    event.preventDefault()
    BaseConnection.post('/token', this.state).then((response) => {

      if(response.status === 200) {
        alert("Usuário autenticado com sucesso!")
      } 
      
      console.log(response.data)

    }).catch((response) => {
      alert("Credenciais incorretas!")
    })
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="Login">
      <Form onSubmit={this.handleSubmit}>

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
          Login
        </Button>

      </Form>
      </div>
    );
  }
}

export default LoginForm