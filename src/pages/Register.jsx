import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { newUserRegister } from 'redux/authReducer';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(newUserRegister(data))
      .unwrap()
      .then(() => {
        navigate('/login');
      });
  };

  return (
    <>
      <MainAppPicture imgClass="register-img" />
      <div className="register-form-container">
        <h2 className="register-form-title">Register</h2>
        <p className="register-form-text">
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input {...register('name', { required: true })} type="text" />
            {errors.name && <span>This field is required</span>}
          </label>
          <label>
            Email
            <input {...register('email', { required: true })} type="email" />
            {errors.email && <span>This field is required</span>}
          </label>
          <label>
            Password
            <input
              {...register('password', { required: true, minLength: 7 })}
              type="text"
            />
            {errors.password && (
              <span>
                Password cannot be an empty term, minimum length is 7 characters
              </span>
            )}
          </label>

          <button type="submit">Register</button>
        </form>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
