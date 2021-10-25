import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function protectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(router) =>
        window.localStorage.getItem('token') ? (
          <Component {...router} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default protectedRoute;
