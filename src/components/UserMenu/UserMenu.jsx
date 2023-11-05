import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/authSelectors';

const UserMenu = () => {
  const { email } = useSelector(selectAuthUser);
  return (
    <div>
      <p>{email}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
