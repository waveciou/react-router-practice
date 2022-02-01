/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

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
import Menu from './components/menu';
// import RouteMonitor from './components/routeMonitor';

import allRouter from './router';

/*
  Redirect 是設定重新導向頁面，Hash 不會 Redirect，但是 Query 會
 */

const app = () => {
  // Redux
  const { isLogin } = useSelector(state => state.account);

  const routePaste = useMemo(() => {
    return allRouter.map(({ name, path, component, exact, needAuth}) => {
      let renderComponent = component;
      if (!isLogin && needAuth) {
        renderComponent = () => <Redirect to="/login" />
      }
      return <Route key={name} path={path} component={renderComponent} exact={exact} />
    });
  }, [isLogin]);

  return (
    <Router>
      <Layout>
        <Menu />
        <Redirect to="/" />
        <Switch>
          { routePaste }
        </Switch>
      </Layout>
    </Router>
  );
};

export default app;
