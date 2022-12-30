import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import FormContact from "./Components/FormContact";
import ContactList from "./Components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  nameInputId = nanoid();

  addContactName = (name, number) => {
    const contact = {
      id: this.nameInputId,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <FormContact onSubmit={this.addContactName} />
        {/* <ContactList contacts={this.getVisibleContacts()} /> */}
      </>
    );
  }
}

export default App;
