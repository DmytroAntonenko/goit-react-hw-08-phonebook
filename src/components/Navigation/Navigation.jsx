import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';

// import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
      <Breadcrumb fontWeight='bold' fontSize='xl' color='red'separator=' ' display='flex' align='center'>
      <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/' isCurrentPage>
          Home
          </BreadcrumbLink>
      </BreadcrumbItem>
      {isLoggedIn && <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/contacts">
          Contacts
          </BreadcrumbLink>
      </BreadcrumbItem>}
      </Breadcrumb>
  );
};

Navigation.propTypes = {
  isLoggedIn: PropTypes.string,
};

export default Navigation;