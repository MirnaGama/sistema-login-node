import {React, Component} from 'react'
import { Redirect } from "react-router-dom";

export default class ProfilePage extends Component {
  
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
        <h1>Seja bem-vindo, {this.props.match.params.name} !</h1>
        </div>
      </div>
    )
  }
}