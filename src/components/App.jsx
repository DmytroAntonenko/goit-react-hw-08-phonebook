import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { lazy, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Box, Center, ChakraProvider, Spinner, Text } from '@chakra-ui/react';

import useAuth from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operation';

import Layout  from './Layout';

// import ContactForm from "./ContactForm";
// import Filter from './Filter';
// import ContactList from './ContactList';

const Home = lazy(() =>
  import('pages/Home/Home'),
);

const RegisterPage = lazy(() =>
  import('pages/Register/Register'),
);

const LoginPage = lazy(() =>
  import('pages/Login/Login'),
);

const ContactsPage = lazy(() =>
  import('pages/Contacts/Contacts'),
);

const NotFound = lazy(() =>
  import('pages/NotFound/NotFound'),
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
     
  return isRefreshing ? (
    <ChakraProvider>
      <Center>
        <Box mt='50%' mb='20px'>
          <Text>...Loading user data</Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <Spinner color="red.500" />
        </Box>
      </Center>
    </ChakraProvider>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route 
            path="/register"
            element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />}/>} 
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>}
          />
          {/* <Route path='/contacts'
              element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />}
          /> */}
          <Route path="*" element={<Suspense fallback={<h2>Loading ...</h2>}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </>

  )}

  App.propTypes = {
    isRefreshing: PropTypes.bool,
  };

export default App;