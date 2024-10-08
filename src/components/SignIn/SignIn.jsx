import { useForm } from 'react-hook-form';
import { StyledSignInContainer } from './SignIn.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userLogin } from 'redux/authReducer';
import { loginSchema } from 'utils/helpers/schemas/loginSchema';
import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as IconEyeOff } from '../../assets/icons/eye-off.svg';
import { ReactComponent as IconEye } from '../../assets/icons/eye.svg';
import { ReactComponent as IconError } from '../../assets/icons/error.svg';
import Button from 'components/Button/Button';

const SignIn = () => {
  const dispatch = useDispatch();
  const [privatPassword, setPrivatPassword] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const onPasswordPrivacySetting = () => {
    setPrivatPassword(prevPasswordSettings => !prevPasswordSettings);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onTouched' });

  const onSubmit = data => {
    dispatch(userLogin(data));
    reset();
  };

  return (
    <StyledSignInContainer
      className={isMobile ? 'signin-container' : 'container'}
    >
      <MainAppPicture imgClass="login-img" />
      <div className="login-form-container">
        <h2 className="login-form-title">Login</h2>
        <p className="login-form-text">
          Please enter your login details to continue using our service:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <input
              {...register('email')}
              className={`input ${errors.email ? 'error-input' : ''} `}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <div className="error">
                <IconError />
                {errors.email?.message}
              </div>
            )}{' '}
          </div>
          <div className="input-wrapper password-input-wrapper">
            <input
              {...register('password')}
              className={`input last-input ${
                errors.password ? 'error-input' : ''
              } `}
              type={privatPassword ? 'password' : 'text'}
              placeholder="Password"
            />
            {privatPassword ? (
              <IconEyeOff
                onClick={() => onPasswordPrivacySetting('password')}
                className="eye-icon"
              />
            ) : (
              <IconEye
                onClick={() => onPasswordPrivacySetting('password')}
                className="eye-icon"
              />
            )}
            {errors.password && (
              <div className="error">
                <IconError className="error-svg" />
                {errors.password?.message}
              </div>
            )}
          </div>

          <Button styledClass="form-btn" buttonType="submit">
            Sign In
          </Button>
        </form>
        <Link className="register-link" to="/register">
          Register
        </Link>
      </div>
    </StyledSignInContainer>
  );
};

export default SignIn;
