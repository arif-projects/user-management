import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './component/Context/AuthProvider/AuthProvider';
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <div className="App">

      <AuthProvider>

      <Router>
        <Switch>

          <Route exact path = "/">
            <Home></Home>
          </Route>

          <Route path = "/login">
            <Login></Login>
          </Route>

          <Route path = "/register">
            <Register></Register>
          </Route>

          <Route path = "/profile">
            <Profile></Profile>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
