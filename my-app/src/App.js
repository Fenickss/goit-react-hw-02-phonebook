import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import FormContact from "./Components/FormContact/FormContact";
import ContactList from "./Components/ContactList";
// import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  formSubmitHandler = (date) => {
    console.log(date);
  };

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
