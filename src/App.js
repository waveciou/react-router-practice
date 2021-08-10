/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
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
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import Menu from './components/menu';
import RouteMonitor from './components/routeMonitor';

/*
  Redirect 是設定重新導向頁面，Hash 不會 Redirect，但是 Query 會
 */

const app = () => {
  return (
    <Router>
      <Layout>
        <Menu />
        <Redirect to="/" />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/about" component={ About } exact />
          <Route path="/about/:id" component={ About } />
          <Route path="/shop" component={ Shop } />
        </Switch>
      </Layout>
      { false ? <RouteMonitor /> : null }
    </Router>
  );
};

export default app;
