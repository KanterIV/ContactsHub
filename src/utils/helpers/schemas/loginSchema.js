import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your e-mail')
    .email('Invalid email'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password is too long'),
});
