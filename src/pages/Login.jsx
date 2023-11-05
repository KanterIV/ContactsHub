import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
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
  );
};

export default Login;
