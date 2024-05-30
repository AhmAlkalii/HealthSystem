import React from 'react';
import { Link } from 'react-router-dom';



export const Nav = () => {
  return (

    <nav className="navbar navbar-expand-lg navs">
      
      <h1 className="navbar-brand" style={{fontSize:30}}>Posters</h1>

      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"  className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Sign-Up"  className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Login"  className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};