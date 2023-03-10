import { NavLink } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';

const AuthNav = () => {
    return (
        <Breadcrumb fontWeight='bold' fontSize='xl' color='blue' separator=' '>
        <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to='/register' isCurrentPage>
            Register
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to='/login'>
            Log in
            </BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default AuthNav;