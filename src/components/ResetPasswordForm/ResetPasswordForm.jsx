import React from 'react';
import { StyledResetPasswordForm } from './ResetPasswordForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordSchema } from 'utils/helpers/schemas/passwordSchema';
import { useDispatch } from 'react-redux';
import Button from 'components/Button/Button';
import { ReactComponent as IconError } from '../../assets/icons/error.svg';
import { userPasswordChange } from 'redux/authReducer';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(passwordSchema), mode: 'onTouched' });

  const onSubmit = passwordData => {
    dispatch(userPasswordChange(passwordData));
    reset();
  };
  return (
    <StyledResetPasswordForm>
      <h3 className="pasword-form-title">Password change</h3>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="password-input-wrapper">
          <label htmlFor="currentPassword" className="input-label">
            Current password
          </label>
          <input
            {...register('currentPassword')}
            id="currentPassword"
            className={`password-input ${
              errors.currentPassword ? 'error-input' : ''
            } `}
            type="text"
            placeholder="Enter your current password"
          />
          {errors.currentPassword && (
            <div className="error">
              <IconError />
              {errors.currentPassword?.message}
            </div>
          )}
        </div>
        <div className="password-input-wrapper">
          <label htmlFor="newPassword" className="input-label">
            New password
          </label>
          <input
            {...register('newPassword')}
            id="newPassword"
            className={`password-input ${
              errors.newPassword ? 'error-input' : ''
            } `}
            type="text"
            placeholder="Enter your new password"
          />
          {errors.newPassword && (
            <div className="error">
              <IconError />
              {errors.newPassword?.message}
            </div>
          )}
        </div>
        <div className="password-input-wrapper">
          <label htmlFor="confirmPassword" className="input-label">
            Confirm new password
          </label>
          <input
            {...register('confirmPassword')}
            id="confirmPassword"
            className={`password-input ${
              errors.confirmPassword ? 'error-input' : ''
            } `}
            type="text"
            placeholder="Confirm your new password"
          />
          {errors.confirmPassword && (
            <div className="error">
              <IconError />
              {errors.confirmPassword?.message}
            </div>
          )}
        </div>
        <Button styledClass="form-btn password-form-btn" buttonType="submit">
          Change password
        </Button>
      </form>
    </StyledResetPasswordForm>
  );
};

export default ResetPasswordForm;
