import {React, Component} from 'react'
import { Redirect } from "react-router-dom";
import BaseConnection from "../config/BaseConnection";

export default class ProfilePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {username: '', name: ''};
  }

  componentDidMount() {

    const token = window.localStorage.getItem('token');

    BaseConnection.get('users/id/' + window.localStorage.getItem('public_id'), 
    { headers: {
      Authorization: 'Bearer ' + token
    }}).then((response) => {
      this.setState({username: response.data[0].username, name: response.data[0].name})
    })
  }

  renderRedirect = () => {
    const isAuth = !!window.localStorage.getItem("token");

    if (!isAuth) {
      return <Redirect to={'/'} /> // returning to the login page ...
    }
  }

  render() {

    return(
      <div className="container">

        {this.renderRedirect()}

        <div className="ProfilePage">
        <h1>Seja bem-vindo, {this.state.name} !</h1>
        <h2>@{this.state.username}</h2>
        </div>
      </div>
    )
  }
}