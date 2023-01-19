import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Luke Skywalker's API
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
          <ul className="navbar-nav ms-auto">
            <li className="navbar-nav">
              <Link className="nav-link" to="/characters">
                Characters
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/starships">
                Starships
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/vehicles">
                Vehicles
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/planets">
                Planets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
