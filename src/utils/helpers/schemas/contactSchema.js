import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name')
    .min(6, 'Name must be at least 6 characters')
    .max(32, 'To long name'),

  email: yup
    .string()
    .required('Please enter your e-mail')
    .matches(
      /\w{0}[0-9a-zA-Zа-яА-Я]+@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
      { message: 'Invalid email' }
    ),

  phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      { message: 'Invalid phone' }
    )
    .min(6, 'Phone must be at least 6 characters')
    .max(20, 'Phone is too long'),
});
