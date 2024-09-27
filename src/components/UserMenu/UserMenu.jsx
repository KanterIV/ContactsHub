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

  const { name, avatarURL } = useSelector(selectAuthUser);
  return (
    <StyledUserMenu>
      <img className="avatar" src={`${avatarURL}`} alt="" />
      <p className="email">{name}</p>
      <button className="logout-btn" onClick={handleLogOut} type="button">
        Logout
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
