import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import SignUpForm from './Pages/SignUpForm'
import ProfilePage from './Pages/ProfilePage';
import NavBar from './Pages/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router>
    <div className="container">
        <NavBar></NavBar>
    </div>

    <Route path="/" exact component={LoginForm}/>
    <Route path="/cadastro" component={SignUpForm}/>
    <Route path="/profile" component={ProfilePage}/>
    </Router>
  );
}

export default App;
