import React from 'react';
import { StyledHeader } from './Navigation.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

import { ReactComponent as AppLogo } from '../../assets/icons/logo.svg';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHeader>
      <div className="container nav-container">
        <Link className="logo" to="/contacts">
          <AppLogo className="logo-svg" />
          <p>
            Contacts<span className="logo-accent">Hub</span>
          </p>
        </Link>
        {authenticated && <UserMenu />}
      </div>
    </StyledHeader>
  );
};

export default Navigation;
