import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'redux/authReducer';
import { selectAuthUser } from 'redux/authSelectors';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLogout());
  };

  const { email } = useSelector(selectAuthUser);
  return (
    <StyledUserMenu>
      <p className="email">{email}</p>
      <button className="logout-btn" onClick={handleLogOut} type="button">
        Logout
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
