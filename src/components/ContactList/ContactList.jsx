import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { List, ListItem } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List marginTop='60px' color='#1A202C' fontSize={{ base: 'xs', md: 'sm' }}>
    {filteredContacts.map(({ id, name, number }) => (
      <ListItem key={id}
        borderBottom='1px solid black'
        marginBottom='10px'
        alignItems='center'>
          <ContactItem name={name} number={number} id={id} />
      </ListItem>
    ))}
    </List>
  )
};

export default ContactList;