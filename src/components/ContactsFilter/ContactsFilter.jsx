import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { getFilter } from '../../redux/contacts/filterSlice';

import { Label, Input, FilterWraper } from './ContactsFilter.styled';

const ContactsFilter = filter => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(getFilter(value));
  };

  return (
    <FilterWraper>
      <Label>
        Find contacts by name
        <Input type="text" name={filter} onChange={handleChangeFilter} />
      </Label>
    </FilterWraper>
  );
};

ContactsFilter.propTypes = {
  filter: propTypes.string.isRequired,
};

export default ContactsFilter;
