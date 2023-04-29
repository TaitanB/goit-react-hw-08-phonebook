import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactsList from 'components/ContactsList/ContactsList';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

import { fetchAllContacts } from 'redux/contacts/operations';
import { Filtered } from '../../redux/contacts/selectors';

import { ContactsContainer } from './Contacts.styled';
import bgContacts from '../../image/bgContacts.jpg';

export default function Contacts() {
  const dispatch = useDispatch();

  const filterValue = useSelector(Filtered);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactsContainer style={{ backgroundImage: `url(${bgContacts})` }}>
        <ContactsForm />
        <ContactsFilter filter={filterValue} />
        <ContactsList filter={filterValue} />
      </ContactsContainer>
    </HelmetProvider>
  );
}
