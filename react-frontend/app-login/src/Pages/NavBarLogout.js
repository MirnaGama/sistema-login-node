import {React, Component} from 'react'

export default class NavBarLogout extends Component {

  handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.location.reload();
  }

  render() {

    return (
      <nav>
          <ul>
          <li onClick={this.handleClick}>Sair</li>
          </ul>
      </nav>
    )
  }

}