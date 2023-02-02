import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import useAuth from 'hooks/useAuth';
import { Flex, Spacer, ChakraProvider } from '@chakra-ui/react';


const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ChakraProvider>
        <Flex borderBottom='solid 2px #000' display='flex'>
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
    </ChakraProvider>
  );
};

export default AppBar;