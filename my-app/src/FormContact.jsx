import { Component } from "react";
import { nanoid } from "nanoid";

class FormContact extends Component {
  nameInputId = nanoid();

  setState = () => {
    return(
      number: "",
    )
  };
  render() {
    return (
      <>
        <form>
          <label name="name" id={this.nameInputId}>
            Имя
          </label>

          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label name="name" id={this.nameInputId}>
            Телефон
          </label>
          <input
            id={this.nameInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Добавить контакт</button>
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
