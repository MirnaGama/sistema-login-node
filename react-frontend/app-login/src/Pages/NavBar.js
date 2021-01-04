import {React, Component} from 'react'
import NavBarLogout from './NavBarLogout'
import NavBarLogin from './NavBarLogin'

export default class NavBar extends Component {

  render() {
    const isAuth = !!window.localStorage.getItem("token");

    return (
      <div>
          {isAuth ? <NavBarLogout/> : <NavBarLogin/>}
      </div>
    )
  }

}