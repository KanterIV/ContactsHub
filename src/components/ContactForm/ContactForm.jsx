import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contactsSelectors';
import { addContact } from 'redux/contactsReducer';
import { ToastContainer, toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleContactsInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = contactData => {
    const hasContactDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (hasContactDuplicate) {
      return toast.warning(`${contactData.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: 'errorMessage',
      });
    }

    dispatch(addContact(contactData));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name,
      number,
    };

    handleAddContact(contact);

    setName('');
    setNumber('');
  };

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit} className={css.contactsForm}>
        <label>
          Name
          <input
            className={css.contactsFormInput}
            onChange={handleContactsInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            placeholder="Ivan Ivanov"
            required
          />
        </label>
        <label>
          Phone
          <input
            className={css.contactsFormInput}
            onChange={handleContactsInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            placeholder="123-45-67"
            required
          />
        </label>

        <button type="submit" className={css.contactsFormBtn}>
          Add contact
        </button>
      </form>
      <ToastContainer />
    </>
  );
};
