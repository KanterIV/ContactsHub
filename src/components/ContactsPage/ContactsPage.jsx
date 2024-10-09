import { StyledContactsPage } from './ContactsPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useMediaQuery } from 'react-responsive';

const ContactsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledContactsPage className="container">
      {isMobile && <Filter />}
      <div className="wrapper">
        <ContactList />
        <ContactForm />
      </div>
    </StyledContactsPage>
  );
};

export default ContactsPage;
