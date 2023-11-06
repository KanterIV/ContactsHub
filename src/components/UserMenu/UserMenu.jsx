import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'redux/authReducer';
import { selectAuthUser } from 'redux/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLogout());
  };

  const { email } = useSelector(selectAuthUser);
  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
