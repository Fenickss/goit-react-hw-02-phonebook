import { Component } from "react";
import "./App.css";
import FormContact from "./Components/FormContact";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = () => {};

  FormSabmitHandler = (date) => {
    console.log(date);
  };

  render() {
    return <FormContact onSubmit={this.FormSabmitHandler} />;
  }
}

export default App;
