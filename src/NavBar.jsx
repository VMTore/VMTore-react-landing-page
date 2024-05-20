//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import PropTypes from "prop-types"

const NavBar = (props) => {


  
  return (
    <>
       <nav className="navbar-expand-md navbar bg-dark sticky-top" data-bs-theme="dark">
          <div className="container-fluid" style={{padding: "none"}}>
              <a className="navbar-brand" href="https://getbootstrap.com/" target="_blank">{props.brand}
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{justifyContent: "end"}}>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Contact
                    </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Send us an email</a></li>
                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/veronica-marin-tore/" target="_blank">LinkedIn</a></li>
                    <li><a className="dropdown-item" href="https://github.com/VMTore" target="_blank">GitHub</a></li>
                  </ul>
                  </li>
                </ul>
              </div>
           </div>
        </nav>
    </>
  )
};

NavBar.propTypes = {
  brand:PropTypes.string.isRequired,

}

export default NavBar;
