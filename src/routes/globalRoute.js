import React from 'react';
import { Route } from 'react-router-dom';

function globalRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(router) => <Component {...router} />} />;
}

export default globalRoute;
