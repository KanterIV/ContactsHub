import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from 'redux/authReducer';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
            Email
            <input {...register('email', { required: true })} type="email" />
            {errors.email && <span>This field is required</span>}
          </label>
          <label>
            Password
            <input {...register('password', { required: true })} type="text" />
            {errors.password && <span>This field is required</span>}
          </label>

          <button type="submit">Sign In</button>
        </form>
        <Link className="register-link" to="/register">
          Login
        </Link>
      </div>
    </>
  );
};

export default Login;
