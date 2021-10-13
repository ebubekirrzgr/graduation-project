// import Register from './pages/Register';
import ProductList from 'components/Products/ProductList';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

// import Home from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Product List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
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
