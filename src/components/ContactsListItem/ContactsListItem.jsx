import css from './ContactsListItem.module.css';
export const ContactsListItem = ({ name, number }) => {
  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>
    </li>
  );
};
