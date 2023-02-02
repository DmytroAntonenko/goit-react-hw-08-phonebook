import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Flex, Heading, Box, Text } from '@chakra-ui/react';

import { selectError } from 'redux/auth/selectors';

const Login = () => {
    const error = useSelector(selectError);

  return <Flex direction='column' align='center'>
        <Heading as='h2' mt={20} mb={30}
            fontSize='48'
            fontWeight='medium'
            textAlign='center' noOfLines={1}>
            Log In
        </Heading>
        <LoginForm />
        <Box mt={10} h={30}>
            {error === 'Login error'
                && (<Text fontSize='md' color='red'>{error}</Text>
            )}
        </Box>
    </Flex>
}

export default Login;