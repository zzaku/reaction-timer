import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/login">Login</Link>
      <Link className="navbar-link" to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
