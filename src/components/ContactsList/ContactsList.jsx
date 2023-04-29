import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import {
  getFilteredContacts,
  getAllContacts,
} from '../../redux/contacts/selectors';
import { fetchDeleteContact } from '../../redux/contacts/operations';

import {
  BtnContact,
  ContactItem,
  AllContacts,
  FilteredContacts,
  ContactList,
  Wraper,
  Title,
  NoContacts,
} from './ContactsList.styled';

import noContacts from '../../image/noContacts.jpg';

const ContactsList = filter => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <Wraper>
      <div>
        <Title>Your contacts</Title>
        {allContacts.length !== 0 ? (
          <ContactList>
            {filteredContacts.map(({ id, name, number }) => {
              return (
                <ContactItem key={id} id={id}>
                  <p>
                    {name} <b>{number}</b>
                  </p>
                  <BtnContact
                    type="BtnContact"
                    onClick={() => deleteContact(id)}
                  >
                    Delete
                  </BtnContact>
                </ContactItem>
              );
            })}
          </ContactList>
        ) : (
          <NoContacts style={{ backgroundImage: `url(${noContacts})` }}>
            You have not added any contacts yet...
          </NoContacts>
        )}
      </div>

      <div>
        <AllContacts>
          All contacts: <b>{allContacts.length}</b>
        </AllContacts>
        {filter.filter && (
          <FilteredContacts>
            Filtered contacts: <b>{filteredContacts.length}</b>
          </FilteredContacts>
        )}
      </div>
    </Wraper>
  );
};

ContactsList.propTypes = {
  filter: propTypes.string.isRequired,
};

export default ContactsList;
