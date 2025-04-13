import React from 'react';
import { StyledProfilePage } from './ProfilePage.slyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/authSelectors';
import { IconButton } from '@mui/material';
import { userUpdateAvatar } from 'redux/authReducer';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { avatarURL, email, name, subscription } = useSelector(selectAuthUser);

  const handleUserAvatarChange = event => {
    console.log(123);
    const file = event.target.files[0];
    dispatch(userUpdateAvatar(file));
  };

  return (
    <StyledProfilePage className="container">
      <div className="wrapper">
        <div className="avatar-wrapper">
          <label className="avatar-label">
            <input
              className="avatar-input"
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={event => handleUserAvatarChange(event)}
            />
            <IconButton className="upload-button" component="span">
              <img
                className="avatar-img"
                src={`https://contacts-reader-02va.onrender.com/${avatarURL}`}
                alt="avarat"
              />
            </IconButton>
          </label>
        </div>
        <div className="inputs-group">
          <div className="input-wrapper">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              id="name"
              className="input"
              type="text"
              placeholder="Name..."
              value={name}
              disabled
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              id="email"
              className="input"
              type="text"
              placeholder="Email..."
              value={email}
              disabled
            />
          </div>
        </div>
      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;
