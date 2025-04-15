import * as yup from 'yup';

export const passwordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Current password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password is too long'),

  newPassword: yup
    .string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password is too long'),

  confirmPassword: yup
    .string()
    .required('Please repeat the new password')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});
