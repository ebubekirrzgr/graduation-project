// import Register from './pages/Register';
import ProductList from 'components/Products/ProductList';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Homepage';
import Login from './pages/Login';
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
          <Route exact path="/ProductList">
            <ProductList />
          </Route>

          <Route path="/product/:id">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
