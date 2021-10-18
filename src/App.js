// import Register from './pages/Register';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/Product-Details';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Product List</Link>
            </li>
          </ul>
        </nav> */}

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
