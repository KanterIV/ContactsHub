import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contactsSelectors';
import { addContact } from 'redux/contactsReducer';
import { toastRejected } from 'utils/helpers/userNotifications';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)} className={css.contactsForm}>
      <label>
        Name
        <input
          {...register('name', { required: true })}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Alex"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        Phone
        <input
          {...register('phone', { required: true })}
          type="tel"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="066-123-45-67"
        />
        {errors.phone && <span>This field is required</span>}
      </label>
      <label>
        Email
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="youremail@gmail.com"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <button type="submit" className={css.contactsFormBtn}>
        Add contact
      </button>
    </form>
  );
};
