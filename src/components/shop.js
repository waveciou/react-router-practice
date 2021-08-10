import React from 'react';
import RouteMonitor from './routeMonitor';
import RouteFromTo from './routeFromTo';

const shop = () => {
  return (
    <div className="content">
      <h1>Shop</h1>
      <p>this is contnet in shop page</p>
      <RouteMonitor />
      <RouteFromTo />
    </div>
  )
};

export default shop;