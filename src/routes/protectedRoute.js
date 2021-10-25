import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function protectedRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(router) =>
        isLoggedIn ? <Component {...router} /> : <Redirect to="/" />
      }
    />
  );
}

export default protectedRoute;
