import { Component } from "react";
import { nanoid } from "nanoid";

class FormContact extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();

  HandeleSabmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
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
    const { name } = this.state;
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
          <label name="name" id={this.nameInputId}>
            Телефон
            <input
              id={this.nameInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handeleChange}
            />
          </label>
          <button type="submit">Добавить контакт</button>
        </form>

        <p>Контакты</p>
        <ul>
          <li>Rosie Simpson</li>
          <li>Hermione Kline</li>
          <li>Eden Clements</li>
        </ul>
      </>
    );
  }
}

export default FormContact;
