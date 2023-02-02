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
            marginLeft='300px'
            textAlign='center' noOfLines={2}
            w={{ base: '100px', md: '400px' }}>
            Welcome to your phonebook, {user.name}!
        </Text>
        <Button
            fontSize='sm' fontWeight='bold'
            w='80px' h={30} variant='outline'
            onClick={() => dispatch(logOut())}>
            Log out
        </Button>
    </Flex>
);
};

export default UserMenu;