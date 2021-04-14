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
      </Switch>
    </Router>
    </>
  );
}

export default App;
