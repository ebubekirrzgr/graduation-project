// import Register from './pages/Register';
import ProductAdd from 'pages/Product-Add/ProductAdd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRoute from 'routes/authRoute';
import GlobalRoute from 'routes/globalRoute';
import ProtectedRoute from 'routes/protectedRoute';

import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/Product-Details';
import Register from './pages/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authLogin = useSelector((state) => state.login);
  const authRegister = useSelector((state) => state.register);

  useEffect(() => {
    if (
      authLogin.loginData?.access_token?.length > 0 ||
      authRegister.registerData?.access_token?.length > 0 ||
      window.localStorage.getItem('token') !== null
    ) {
      setIsLoggedIn(true);
    }
  }, [
    authLogin.loginData?.access_token?.length,
    authRegister.registerData?.access_token?.length,
    isLoggedIn,
  ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/Account" component={Account} />

          <ProtectedRoute exact path="/ProductAdd" component={ProductAdd} />

          <AuthRoute path="/Login" isLoggedIn={isLoggedIn} component={Login} />

          <AuthRoute
            path="/Register"
            isLoggedIn={isLoggedIn}
            component={Register}
          />

          <GlobalRoute path="/ProductDetails/:id" component={ProductDetails} />

          <GlobalRoute path="/" component={Home} />

          <GlobalRoute path="/*" component={Home} />

          <GlobalRoute path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
