import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/authSelectors';
import { StyledUserMenu } from './UserMenu.styled';
import { ReactComponent as ArrowIcon } from '../../assets/icons/downarrow.svg';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { Filter } from 'components/Filter/Filter';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const UserMenu = () => {
  const { pathname } = useLocation();
  const { name, avatarURL } = useSelector(selectAuthUser);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const userBtnRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleDropdownStatus = () => {
    setDropdownMenu(prevState => !prevState);
  };
  return (
    <StyledUserMenu>
      {pathname === '/contacts' && !isMobile ? <Filter /> : null}
      <p className="user-name">{name}</p>
      <button
        className="user-btn"
        ref={userBtnRef}
        onClick={() => handleDropdownStatus()}
      >
        <img className="avatar" src={`${avatarURL}`} alt="user avatar" />
        <ArrowIcon className="dropdown-icon" />
      </button>

      {dropdownMenu && (
        <DropdownMenu
          userBtnRef={userBtnRef}
          dropdownMenu={dropdownMenu}
          setDropdownMenu={setDropdownMenu}
        />
      )}
    </StyledUserMenu>
  );
};

export default UserMenu;
