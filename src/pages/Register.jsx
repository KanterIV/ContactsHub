import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { newUserRegister } from 'redux/authReducer';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(newUserRegister(data));
    reset();
  };

  return (
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

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
