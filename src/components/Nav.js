import React from "react";
import logo from "../assets/icons/logo.png";
var Link = require("react-router-dom").Link;

function Nav() {
  return (
    <nav className="nav__wrapper">
      <div className="nav container">
        <div className="nav__brand nav__list">
          <Link className="nav__list-item" to={`${process.env.PUBLIC_URL}/`}>
            <img src={logo} className="nav__brand-icon" alt="" />
            Eliza Cottrell <span className="sr-only">Home</span>
          </Link>
        </div>

        <div className="nav__list nav__list--links">
          <Link
            className="nav__list-item"
            to={`${process.env.PUBLIC_URL}/about`}
          >
            About me
          </Link>
          <Link
            className="nav__list-item"
            to={`${process.env.PUBLIC_URL}/work`}
          >
            Work
          </Link>
          <Link
            className="nav__list-item"
            to={`${process.env.PUBLIC_URL}/contact`}
          >
            Contact
          </Link>
        </div>

        <div className="nav__list">
          <a
            className="nav__list-item"
            href="https://twitter.com/_elizacottrell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            className="nav__list-item"
            href="https://github.com/LizCottrell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="nav__list-item"
            href="https://www.linkedin.com/in/elizabeth-cottrell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
