import css from './ContactForm.module.css';
import { Component } from 'react';
import { RiContactsBook2Line } from 'react-icons/ri';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    // this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form_wrapper} onSubmit={this.handleSubmit}>
        <RiContactsBook2Line className={css.iconContact} />
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="123-45-89"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={css.button_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
