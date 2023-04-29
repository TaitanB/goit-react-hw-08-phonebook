import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddContact } from '../../redux/contacts/operations';

import {
  FormAddContact,
  Label,
  Input,
  BtnContact,
  FormTitle,
} from './ContactsForm.styled';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(fetchAddContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormAddContact onSubmit={handleSubmit}>
      <FormTitle>Add a new contact?</FormTitle>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <BtnContact type="submit">Add contact</BtnContact>
    </FormAddContact>
  );
}
