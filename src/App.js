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
import Verification from './Pages/Auth/Verification/Verification';
import $ from 'jquery'
import Index from './Pages/Home/Index';
import { useEffect } from 'react';
import MenuCategory from './Pages/Menu/MenuCategory';
import Menu2 from './Pages/Menu/Menu2';
import { Provider } from 'react-redux';
import { store, persistore } from './stores/index'
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  useEffect(() => {


  })
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <Router>
            <Switch>
              <Route exact={true} path="/" component={Login} />
              <Route exact={true} path="/sign-up" component={Signup} />
              <Route exact={true} path="/forget-password" component={ForgetPswd} />
              <Route exact={true} path="/new-password" component={NewPassword} />
              <Route exact={true} path="/verification" component={Verification} />
              <Route exact={true} path="/Home" component={Location} />
              <Route exact={true} path="/add-location" component={AddLocation} />
              <Route exact={true} path="/menu-management" component={Menu} />
              <Route exact={true} path="/add-menu" component={AddMenu} />
              <Route exact={true} path="/edit-menu" component={EditMenu} />
              <Route exact={true} path="/home" component={Index} />
              <Route exact={true} path="/menu-category" component={MenuCategory} />
              <Route exact={true} path="/menu-managment-2" component={Menu2} />


            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
