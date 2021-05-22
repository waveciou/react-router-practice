/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import Menu from './components/menu';
import RouteMonitor from './components/routeMonitor';

const app = () => {
  return (
    <Router>
      <div className="container">
        <Menu />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/about" component={ About } exact />
          <Route path="/about/:id" component={ About } />
          <Route path="/shop" component={ Shop } />
        </Switch>
      </div>
      { false ? <RouteMonitor /> : null }
    </Router>
  );
};

export default app;
