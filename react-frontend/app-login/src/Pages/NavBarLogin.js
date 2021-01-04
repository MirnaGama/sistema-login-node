import {React} from 'react'
import {Link} from 'react-router-dom'

function NavBarLogin() {

    return (
      <nav>
      <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/cadastro">Cadastro</Link></li>
      </ul>
      </nav>
    )

}

export default NavBarLogin