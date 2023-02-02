import ProtoTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button
} from '@chakra-ui/react';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <ChakraProvider>
			<Box w='600px'>
				<Flex>
        <Flex>
					<Box w='300px' mb='15px'>
						<Text fontSize='16px' paddingTop='10px'>{name}: </Text>
					</Box>
					<Box w='150px'>
						<Text fontSize='16px' paddingTop='10px'>{number}</Text>
					</Box>
        </Flex>
        <Button p={1} w={120}
          display="block"
          marginLeft='auto'
          marginRight='auto'
          fontWeight='bold'
          type='submit' name='Delete contact'
          onClick={onDelete}>
          Delete
        </Button>
      </Flex>
			</Box>
    </ChakraProvider>
    </>
  );
};

ContactItem.propTypes = {
  name: ProtoTypes.string.isRequired,
  number: ProtoTypes.string.isRequired,
  id: ProtoTypes.string.isRequired,
  onDelete: ProtoTypes.func,
};

export default ContactItem;