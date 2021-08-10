import React from 'react';
import RouteMonitor from './routeMonitor';
import RouteFromTo from './routeFromTo';

const home = () => {
  return (
    <div className="content">
      <h1>Home</h1>
      <p>this is contnet in home page</p>
      <RouteMonitor />
      <RouteFromTo />
    </div>
  )
};

export default home;