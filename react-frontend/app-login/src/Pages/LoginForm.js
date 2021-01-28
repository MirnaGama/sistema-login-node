import {React, Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BaseConnection from "../Config/BaseConnection";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', err_message: '', redirect: false};
  }

  // FUNCTION TO LOGIN
  handleSubmit = (event) => {
    event.preventDefault()
    
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    
    BaseConnection.post('/token', user).then((response) => {

      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('username', this.state.username);
      window.localStorage.setItem('public_id', response.data.public_id);

      this.setState({redirect: true})

    }).catch((err) => {
      this.setState({err_message: "Credenciais incorretas!"})
    })
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  renderRedirect = () => {
    if (this.state.redirect || !!window.localStorage.getItem("token")) {
      return <Redirect to={'/profile'} />
    }
  }

  render() {
    return (
      <div className="ContainerForm">

      {this.renderRedirect()}

      <Form onSubmit={this.handleSubmit}>

      <p className="text-danger d-flex justify-content-center">{this.state.err_message}</p>

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