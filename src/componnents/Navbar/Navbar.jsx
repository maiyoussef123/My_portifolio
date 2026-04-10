import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand text-primary" to="/">
          Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">
                Projects
              </Link>
            </li>
          </ul>

          <div>
            <button className="btn btn-primary m-2">Login</button>
            <button className="btn btn-primary m-2">Register</button>
          </div>
        </div>

      </div>
    </nav>
  );
}
