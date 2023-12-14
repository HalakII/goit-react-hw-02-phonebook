import { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { NotificationManager } from 'react-notifications';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import contactNumbers from '../data/contacts.json';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { SectionSubtitle } from './SectionSubtitle/SectionSubtitle';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [...contactNumbers],
    filter: '',
  };

  createNewContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const contactExists = contacts.some(
      contact => contact.name === newContact.name
    );
    if (contactExists) {
      NotificationManager.info(`${data.name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  deleteContact = deleteId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== deleteId),
    });
    // this.setState({ filter: '' });
  };

  handleChangeFilter = event => {
    const value = event.currentTarget.value.toLowerCase();
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <NotificationContainer />
        <SectionTitle title="Phonebook" />
        <ContactForm onSubmit={this.createNewContact} />
        <SectionSubtitle subtitle="Contacts" />
        <ContactsFilter
          value={this.state.filter}
          onFilterChange={this.handleChangeFilter}
        />
        <ContactsList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
