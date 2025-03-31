import React from 'react';
import { formatPrice } from '../utils/formatUtils';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">🍕 Mamma Mia!</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="/">🍕 Home</a>
          
          {token ? (
            <>
              <a className="nav-link" href="/profile">🔓 Profile</a>
              <a className="nav-link" href="/logout">🔒 Logout</a>
            </>
          ) : (
            <>
              <a className="nav-link" href="/login">🔐 Login</a>
              <a className="nav-link" href="/register">🔐 Register</a>
            </>
          )}
          
          <a className="nav-link" href="/cart">🛒 Total: {formatPrice(total)}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;