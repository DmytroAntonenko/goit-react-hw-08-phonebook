import { useDispatch } from 'react-redux';
import * as React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

import { logOut } from 'redux/auth/operation';
import useAuth from 'hooks/useAuth';


const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
	return (
    <Flex direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        w='100%'
        justify='space-between'
    >
        <Text fontSize={{ base: '22px'}}
            mb={{ base: '10px', md: 0 }} mr={{ md: '15px' }}
            marginLeft='280px'
            textAlign='center' noOfLines={2}
            w={{ base: '100px', md: '400px' }}>
            Welcome to your phonebook, {user.name}!
        </Text>
        <Button
            fontWeight='bold' marginTop='4px' marginBottom='4px'
            w='100px' h={30} variant='outline' backgroundColor='#EDF2F7'
            onClick={() => dispatch(logOut())}>
            Log out
        </Button>
    </Flex>
);
};

export default UserMenu;