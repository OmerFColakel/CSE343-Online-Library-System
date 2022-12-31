import LoginForm from '../src/components/LoginForm';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import Booklist from "./components/Booklist";
import Userlist from "./components/Userlist";
import './App.css';

function App() {
  
  /*const [guest, setGuest] = useState({name: "", password: ""}); */

  /*const Logout = () => {
    console.log("Logout");
    setGuest({
      email: "",
      password: "",
    });
    setError("");
  }
  */
  

  return (

    <Router>
    <Switch>
    
    <Route exact path="/CSE343-Online-Library-System" component={LoginForm}>
    <div className="App">
        <LoginForm/>
    </div>
    </Route>

    <Route exact path="/main">
      <div className='Main'>
      <MainPage/>
      </div>
    </Route>

    <Route exact path="/bookList">
      <Booklist/>
    </Route>

    <Route exact path="/userlist">
      <Userlist/>
    </Route>
    
    </Switch>
    </Router>
  
  );
}

export default App;
