import React from 'react';
import { useSelector } from 'react-redux';
// import { userLogout } from 'redux/authReducer';
import { selectAuthUser } from 'redux/authSelectors';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  // const dispatch = useDispatch();
  // const handleLogOut = () => {
  //   dispatch(userLogout());
  // };

  const { name, avatarURL } = useSelector(selectAuthUser);
  return (
    <StyledUserMenu>
      <p className="user-name">{name}</p>
      <img className="avatar" src={`${avatarURL}`} alt="user avatar" />
      {/* <button className="logout-btn" onClick={handleLogOut} type="button">
        Logout
      </button> */}
    </StyledUserMenu>
  );
};

export default UserMenu;
