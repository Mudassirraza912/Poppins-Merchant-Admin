import './App.css';
import Header from './Component/Header';
import Location from './Pages/Location/Location';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddLocation from './Pages/Location/AddLocation';
import Menu from './Pages/Menu/Menu';
import AddMenu from './Pages/Menu/AddMenu';
import EditMenu from './Pages/Menu/EditMenu';
import Signup from './Pages/Auth/Register/Signup';
import Login from './Pages/Auth/Login/Login';
import ForgetPswd from './Pages/Auth/Forget/ForgetPswd';
import NewPassword from './Pages/Auth/NewPassword/NewPassword';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Location}/>
        <Route exact={true} path="/add-location" component={AddLocation}/>
        <Route exact={true} path="/menu-management" component={Menu}/>
        <Route exact={true} path="/add-menu" component={AddMenu}/>
        <Route exact={true} path="/edit-menu" component={EditMenu}/>
        <Route exact={true} path="/sign-up" component={Signup}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/forget-password" component={ForgetPswd}/>
        <Route exact={true} path="/new-password" component={NewPassword}/>


      </Switch>
    </Router>
    </>
  );
}

export default App;
