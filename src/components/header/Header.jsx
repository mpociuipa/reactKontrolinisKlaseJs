import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>

          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
