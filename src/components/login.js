import React from 'react';
import RouteMonitor from './routeMonitor';
import RouteFromTo from './routeFromTo';

const login = () => {
  return (
    <div className="content">
      <h1>Login</h1>
      <p>this is contnet in login page</p>
      <RouteMonitor />
      <RouteFromTo />
    </div>
  )
};

export default login;