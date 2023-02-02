import RegisterForm from 'components/RegisterForm';
import { useSelector } from 'react-redux';
import { Flex, Heading, Box, Text } from '@chakra-ui/react';

import { selectError } from 'redux/auth/selectors';

const Register = () => {
    const error = useSelector(selectError);

   return <Flex direction='column' align='center'>
        <Heading as='h2' mt={20} mb={30}
            fontSize='48'
            fontWeight='medium'
            textAlign='center' noOfLines={1}>
            RegistrForm
        </Heading>
        <RegisterForm />
        <Box mt={10} h={30}>
            {error === 'User creation error' && (
            <Text fontSize='md' color='red'>
                User is already registered.
            </Text>)}
        </Box>
    </Flex>
}

export default Register;