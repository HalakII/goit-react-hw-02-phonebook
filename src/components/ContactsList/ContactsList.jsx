import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts }) => {
  return (
    <ul className="{css.contactList}">
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
