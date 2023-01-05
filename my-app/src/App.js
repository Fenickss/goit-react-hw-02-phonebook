import { Component } from "react";

import "./App.css";
import FormContact from "./Components/FormContact/FormContact";
import ContactList from "./Components/ContactList";
import shortid from "shortid";


class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name, id) => {
    const contact = {
      name,
      id: shortid.generate(),
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  formSubmitHandler = (date) => {
    console.log(date);
  };

  // addContact = (event) => {};

  render() {
    const { contacts } = this.state;
    return (
      <>
        <FormContact onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
