import ProtoTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import {
  GridItem,
  Button
} from '@chakra-ui/react';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <span className={css.contact}>
        {name}: {number}
      </span>
      <GridItem colSpan={1} justifySelf='center' area={'button'}>
        <Button w={{ base: '40px', md: '55px' }}
          h={{ base: '14px', md: '18px' }} mb='2px' size='xs'
          variant='outline'
          type='submit' name='Delete'
          onClick={onDelete}>
          Delete
        </Button>
      </GridItem>
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