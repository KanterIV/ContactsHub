import React from 'react';
import { StyledHeader } from './Navigarion.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

import { ReactComponent as AppLogo } from '../../assets/icons/logo.svg';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHeader>
      <Link className="logo" to="/">
        <AppLogo className="logo-svg" />
        ContactsHub
      </Link>
      {/* <nav className="header-nav">
        <ul className="header-list">
          <li>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
          </li>
          {authenticated ? (
            <li>
              <NavLink className="header-link" to="/contacts">
                Contacts
              </NavLink>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav> */}
      {authenticated && <UserMenu />}
    </StyledHeader>
  );
};

export default Navigation;
