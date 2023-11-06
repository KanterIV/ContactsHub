import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsReducer';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contactsSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsArr = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const hanldeDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactsList}>
      {contactsArr.length !== 0 &&
        contactsArr.map(contact => {
          const { id, name, number } = contact;
          return (
            <ContactListItem
              key={id}
              contactId={id}
              contactName={name}
              contactNumber={number}
              deleteContact={hanldeDeleteContact}
            />
          );
        })}
    </ul>
  );
};
