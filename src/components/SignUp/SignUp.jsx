import { StyledSignUpContainer } from './SignUp.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { newUserRegister } from 'redux/authReducer';
import { registerSchema } from 'utils/helpers/schemas/registerSchema';
import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import Button from 'components/Button/Button';
import { useState } from 'react';
import { ReactComponent as IconEyeOff } from '../../assets/icons/eye-off.svg';
import { ReactComponent as IconEye } from '../../assets/icons/eye.svg';
import { ReactComponent as IconError } from '../../assets/icons/error.svg';
import { useMediaQuery } from 'react-responsive';

const SignUp = () => {
  const navigate = useNavigate();
  const [privatPassword, setPrivatPassword] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const onPasswordPrivacySetting = () => {
    setPrivatPassword(prevPasswordSettings => !prevPasswordSettings);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(newUserRegister(data))
      .unwrap()
      .then(() => {
        navigate('/login');
      });
  };
  return (
    <StyledSignUpContainer
      className={isMobile ? 'signup-container' : 'container'}
    >
      <MainAppPicture imgClass="register-img" />
      <div className="register-form-container">
        <h2 className="register-form-title">Register</h2>
        <p className="register-form-text">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <input
              {...register('name')}
              className={`input ${errors.name ? 'error-input' : ''} `}
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <div className="error">
                <IconError />
                {errors.name?.message}
              </div>
            )}
          </div>
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
            )}
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
            Register
          </Button>
        </form>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </div>
    </StyledSignUpContainer>
  );
};

export default SignUp;
