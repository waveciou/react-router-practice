/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import RouteMonitor from './routeMonitor';
import RouteFromTo from './routeFromTo';
import { useHistory } from 'react-router-dom';

const about = () => {
  const history = useHistory();

  const gotoAnotherPath = () => {
    history.push('/shop');
  };

  return (
    <div className="content">
      <h1>About</h1>
      <p>this is contnet in about page</p>
      <button onClick={ gotoAnotherPath }>Go To Shop Page</button>
      <RouteMonitor />
      <RouteFromTo />
    </div>
  )
};

export default about;