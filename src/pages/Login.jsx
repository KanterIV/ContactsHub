import { yupResolver } from '@hookform/resolvers/yup';
import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from 'redux/authReducer';
import { loginSchema } from 'utils/helpers/schemas/loginSchema';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onTouched' });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userLogin(data));
    reset();
  };

  return (
    <>
      <MainAppPicture imgClass="login-img" />
      <div className="login-form-container">
        <h2 className="register-form-title">Login</h2>
        <p className="login-form-text">
          Please enter your login details to continue using our service:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              {...register('email')}
              className={`input ${errors.email ? 'error-input' : ''} `}
              type="email"
              placeholder="Email"
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </label>
          <label>
            <input
              {...register('password')}
              className={`input ${errors.password ? 'error-input' : ''} `}
              type="text"
              placeholder="Password"
            />
            {errors.password && <span>{errors.password?.message}</span>}
          </label>

          <button type="submit">Sign In</button>
        </form>
        <Link className="register-link" to="/register">
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;
