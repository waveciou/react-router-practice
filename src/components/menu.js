import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/about/aaa">About(aaa)</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
};

export default menu;