import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import css from './Layout.module.css';

import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <ChakraProvider>
	    <div className={css.layout__container}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    </ChakraProvider>
  );
};

export default Layout;