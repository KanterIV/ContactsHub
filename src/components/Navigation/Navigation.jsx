import React from 'react';
import { StyledHeader } from './Navigarion.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';

import { ReactComponent as AppLogo } from '../../assets/icons/logo.svg';
// import DropdownMenu from 'components/DropdownMenu/DropdownMenu';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHeader>
      <div className="container nav-container">
        <Link className="logo" to="/">
          <AppLogo className="logo-svg" />
          ContactsHub
        </Link>
        {authenticated && <UserMenu />}
        {/* <DropdownMenu /> */}
      </div>
    </StyledHeader>
  );
};

export default Navigation;
