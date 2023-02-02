import PropTypes from 'prop-types';
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
    redirectTo: PropTypes.string,
};

export default RestrictedRoute;