import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {
    Button,
  } from '@chakra-ui/react';

const BackButton = () => {
  const location = useLocation();

  return (
    
    <NavLink className="BackButton" to={location?.state?.from ?? '/'} type="button">
    <Button p={2} my={5}
      w={200} 
      display="block"
      marginLeft='auto'
      marginRight='auto'
      fontWeight='bold'
      type='submit' name='Back'>Back
    </Button>
    </NavLink>
  );
};

export default BackButton;