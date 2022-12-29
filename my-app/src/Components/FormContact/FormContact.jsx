import { Component } from "react";
import { nanoid } from "nanoid";

class FormContact extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();

  HandeleSabmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handeleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.HandeleSabmit}>
          <label id={this.nameInputId}>
            Имя
            <input
              id={this.nameInputId}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handeleChange}
            />
          </label>
          <label id={this.nameInputId}>
            Телефон
            <input
              id={this.nameInputId}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handeleChange}
            />
          </label>
          <button type="submit">Добавить контакт</button>
        </form>
      </>
    );
  }
}

export default FormContact;
