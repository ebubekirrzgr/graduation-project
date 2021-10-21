// import Register from './pages/Register';
import ProductAdd from 'pages/Product-Add/ProductAdd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/Product-Details';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/ProductDetails/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/ProductAdd">
            <ProductAdd />
          </Route>
          <Route exact path="/Account">
            <Account />
          </Route>
          <Route exact path="/*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
