import React from 'react';
import { StyledHeader } from './Navigarion.styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <StyledHeader>
      <nav className="header-nav">
        <ul className="header-list">
          <li>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/register">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Navigation;
