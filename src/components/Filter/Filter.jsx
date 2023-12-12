import css from './Filter.module.css';
export const ContactsFilter = () => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" name="filter" />
    </label>
  );
};
