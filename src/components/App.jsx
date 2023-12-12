import { Component } from 'react';
// import { nanoid } from 'nanoid';
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
  formSubmitHandler = data => {
    // const { contacts } = this.state;
    console.log(data);
  };
  render() {
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
        <SectionTitle title="Phonebook" />
        <ContactForm onSubmit={this.formSubmitHandler} />
        <SectionSubtitle subtitle="Contacts" />
        <ContactsFilter />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
