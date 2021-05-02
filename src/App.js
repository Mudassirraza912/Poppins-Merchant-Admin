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
import PrivateRoute from './utils/PrivateRoute';
import AuthRoutes from './utils/AuthRoutes';

function App() {
  useEffect(() => {


  })
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <Router>
            <Switch>
              {/* Unauth Routs */}
              <AuthRoutes exact={true} path="/">
                <Login />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/sign-up">
                <Signup />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/forget-password">
                <ForgetPswd />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/new-password">
                <NewPassword />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/verification">
                <Verification />
              </AuthRoutes>
              {/* <Route exact={true} path="/" component={Login} /> */}
              {/* <Route exact={true} path="/sign-up" component={Signup} />
              <Route exact={true} path="/forget-password" component={ForgetPswd} />
              <Route exact={true} path="/new-password" component={NewPassword} />
              <Route exact={true} path="/verification" component={Verification} /> */}

              {/* Auth Routes */}
              <PrivateRoute exact={true} path="/Home">
                <Location />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/add-location">
                <AddLocation />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/menu-management">
                <Menu />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/add-menu">
                <AddMenu />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/edit-menu">
                <EditMenu />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/home">
                <Index />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/menu-category">
                <MenuCategory />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/menu-managment-2">
                <Menu2 />
              </PrivateRoute>
              {/* <Route exact={true} path="/Home" component={Location} /> */}
              {/* <Route exact={true} path="/add-location" component={AddLocation} /> */}
              {/* <Route exact={true} path="/menu-management" component={Menu} />
              <Route exact={true} path="/add-menu" component={AddMenu} />
              <Route exact={true} path="/edit-menu" component={EditMenu} />
              <Route exact={true} path="/home" component={Index} />
              <Route exact={true} path="/menu-category" component={MenuCategory} />
              <Route exact={true} path="/menu-managment-2" component={Menu2} /> */}


            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
