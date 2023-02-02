import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';
import { Flex, Spacer, ChakraProvider } from '@chakra-ui/react';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ChakraProvider>
      <div className={css.app__container}>
        <Flex>
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </div >
    </ChakraProvider>
  );
};