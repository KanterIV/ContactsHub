import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'To long name'),

  email: yup
    .string()
    .required('Please enter your e-mail')
    .email('Invalid email'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password is too long'),
});
