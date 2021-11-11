/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';

import Layout from './components/layout';
// import Home from './components/home';
// import About from './components/about';
// import Shop from './components/shop';
import Menu from './components/menu';
import RouteMonitor from './components/routeMonitor';

import allRouter from './router';

/*
  Redirect 是設定重新導向頁面，Hash 不會 Redirect，但是 Query 會
 */

const app = () => {
  const routePaste = useMemo(() => {
    return allRouter.map(({ name, path, component, exact}) => {
      return <Route key={name} path={path} component={component} exact={exact} />
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Menu />
        <Redirect to="/" />
        <Switch>
          { routePaste }
        </Switch>
      </Layout>
      { false ? <RouteMonitor /> : null }
    </Router>
  );
};

export default app;
