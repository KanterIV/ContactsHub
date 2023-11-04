import css from './ContactListItem.module.css';

export const ContactListItem = ({
  contactId,
  contactName,
  contactNumber,
  deleteContact,
}) => {
  return (
    <li className={css.contactListItem}>
      <p>{`${contactName}: `}</p>
      <span>{contactNumber}</span>
      <button
        className={css.deleteBtn}
        onClick={() => deleteContact(contactId)}
        type="button"
        name={contactId}
      >
        Delete
      </button>
    </li>
  );
};
