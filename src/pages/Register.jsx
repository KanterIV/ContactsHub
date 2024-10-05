import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { newUserRegister } from 'redux/authReducer';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'utils/helpers/schemas/registerSchema';

const Register = () => {
  const navigate = useNavigate();
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
            <input
              {...register('name')}
              className={`input ${errors.name ? 'error-input' : ''} `}
              type="text"
              placeholder="Name"
            />
            {errors.name && <span>{errors.name?.message}</span>}
          </label>
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
