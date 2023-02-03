import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { ChakraProvider, Box, Center, Heading, Spinner } from '@chakra-ui/react';

import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Box w="380px" mr="auto" ml="auto" mb="40px">
				<Center mt='30px' mb="15px">
        <Heading as='h2' mt={20} mb={30}
          marginTop='0px'
          fontSize='32'
          fontWeight='medium'
          textAlign='center' noOfLines={1}>
          Your phonebook
        </Heading>
				</Center>
        <ContactForm />
      </Box>
      <Box w="610px" mr="auto" ml="auto"
        align='stretch'
        backgroundColor='#9fa2a6'
        borderColor='#2D3748'
        border='2px solid'
        marginBottom='12'
        borderRadius='10px'
        p='10px'>
				<Center mb="15px">
					<Heading as='h6' size='md'>
						Contacts
					</Heading>
				</Center>
				<Filter />
				{isLoading && !error &&<Center><Spinner color='red.500' /></Center>}
        {contacts.length > 0 && (
          <>
            <ContactList />
          </>
        )} 
      </Box>
    </ChakraProvider>
  );
}

export default Contacts;