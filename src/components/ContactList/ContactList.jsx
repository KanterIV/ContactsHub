import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsReducer';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contactsSelectors';
import { StyledContactsList } from './ContactList.styled';

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
    <StyledContactsList>
      {contactsArr.length !== 0 &&
        contactsArr.map(contact => {
          const { _id, name, phone } = contact;
          return (
            <ContactListItem
              key={_id}
              contactId={_id}
              contactName={name}
              contactNumber={phone}
              deleteContact={hanldeDeleteContact}
            />
          );
        })}
    </StyledContactsList>
  );
};
