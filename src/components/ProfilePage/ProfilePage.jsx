import React from 'react';
import { StyledProfilePage } from './ProfilePage.slyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/authSelectors';
import { IconButton } from '@mui/material';
import { userUpdateAvatar } from 'redux/authReducer';
import { getCurrentAvatarUrl } from 'utils/helpers/avatarUrlCheck';
import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { avatarURL, email, name, subscription } = useSelector(selectAuthUser);

  const handleUserAvatarChange = event => {
    const file = event.target.files[0];
    dispatch(userUpdateAvatar(file));
  };

  return (
    <StyledProfilePage className="container">
      <div className="wrapper">
        <div className="avatar-wrapper">
          <h2 className="profile-header">Profile</h2>
          <p className="profile-user-status">
            {`Subscription type: `}
            <span className="profile-user-status-value">{subscription}</span>
          </p>
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
                src={getCurrentAvatarUrl(avatarURL)}
                alt="avarat"
              />
            </IconButton>
          </label>
        </div>
        <div className="inputs-group">
          <h3 className="user-info-title">Basic user information</h3>
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
          <ResetPasswordForm />
        </div>
      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;
