/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const layout = ({ children }) => {
  const { pathname } = useLocation();
  const [ location, setLocation ] = useState({ from: '', to: '' });

  useEffect(() => {
    console.log('init');
  }, []);

  useEffect(() => {
    const _location = JSON.parse(JSON.stringify(location));

    if (_location.to === '') {
      _location.from = 'first';
      _location.to = pathname; 
    } else {
      const f = _location.to;
      _location.from = f;
      _location.to = pathname;
    }

    setLocation(_location);
  }, [pathname]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="container">{ children }</div>
  );
};

export default layout;