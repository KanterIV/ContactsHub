import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contactsSelectors';
import { addContact } from 'redux/contactsReducer';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from 'utils/helpers/schemas/contactSchema';
import { toastRejected } from 'utils/helpers/userNotifications';
import Button from 'components/Button/Button';
import { StyledContactForm } from './ContactForm.styled';

import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconError } from '../../assets/icons/error.svg';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema), mode: 'onTouched' });

  const onSubmit = contactData => {
    const hasContactDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (hasContactDuplicate) {
      toastRejected(`${contactData.name} is already in your contacts!`);
      return;
    }

    dispatch(addContact(contactData));
    reset();
  };

  return (
    <StyledContactForm>
      <h2 className="contact-form-title">Add a new contact to your list</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <input
            {...register('name')}
            className={`input ${errors.name ? 'error-input' : ''} `}
            type="text"
            placeholder="Name..."
          />
          {errors.name && (
            <div className="error">
              <IconError />
              {errors.name?.message}
            </div>
          )}
        </div>
        <div className="input-wrapper">
          <input
            {...register('phone')}
            className={`input ${errors.name ? 'error-input' : ''} `}
            type="tel"
            placeholder="Phone number..."
          />
          {errors.phone && (
            <div className="error">
              <IconError />
              {errors.phone?.message}
            </div>
          )}
        </div>
        <div className="input-wrapper">
          <input
            {...register('email')}
            className={`input ${errors.name ? 'error-input' : ''} `}
            type="email"
            placeholder="E-mail..."
          />
          {errors.email && (
            <div className="error">
              <IconError />
              {errors.email?.message}
            </div>
          )}
        </div>
        <Button styledClass="form-btn contact-form-btn" buttonType="submit">
          <IconPlus />
          Add contact
        </Button>
      </form>
    </StyledContactForm>
  );
};
