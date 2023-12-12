import css from './ContactForm.module.css';
export const ContactForm = ({ name, number }) => {
  return (
    <form className={css.form_wrapper}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name={name} required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name={number} required />
      </label>

      <button className={css.button_add} type="submit">
        Add contact
      </button>
    </form>
  );
};
