// components/Layout.js
import React from 'react';
import Header from '../header/Header'; // Import Header component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;