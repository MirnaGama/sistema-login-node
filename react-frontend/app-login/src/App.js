import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import SignUp from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="container">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
        </ul>
      </nav>
    </div>

    <Route path="/" exact component={LoginForm}/>
    <Route path="/cadastro" component={SignUp}/>
    </Router>
  );
}

export default App;
