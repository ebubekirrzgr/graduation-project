import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('pages/Homepage'));

const routerPaths = [
  {
    path: '/',
    name: 'home',
    component: Home,
    exact: true,
    props: {},
  },
];

const Routes = (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {routerPaths.map(({ path, name, component, props }) => (
          <ProtectedRoute
            key={name}
            exact
            path={path}
            component={component}
            props={props}
          />
        ))}
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
