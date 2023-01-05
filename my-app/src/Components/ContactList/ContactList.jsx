import React from "react";

const ContactList = ({ contacts }) => (
  <ul>
    <p>Contacts</p>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    ))}
  </ul>
);

export default ContactList;

// Больше ничего не нужно!!!!!!!!!!!!!!!
