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

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Location}/>
        <Route exact={true} path="/add-location" component={AddLocation}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
