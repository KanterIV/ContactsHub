import { StyledListItem } from './ContactListItem.styled';
import { ReactComponent as IconMan } from '../../assets/icons/man.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/phone.svg';
import { ReactComponent as IconBasket } from '../../assets/icons/basket.svg';

export const ContactListItem = ({
  contactId,
  contactName,
  contactNumber,
  deleteContact,
}) => {
  return (
    <StyledListItem>
      <div className="name-container">
        <IconMan />
        <p>{`${contactName}`}</p>
      </div>
      <div className="number-container">
        <IconPhone />
        <span>{contactNumber}</span>
      </div>

      <button
        className="list-item-btn"
        onClick={() => deleteContact(contactId)}
        type="button"
        name={contactId}
      >
        <IconBasket />
      </button>
    </StyledListItem>
  );
};
