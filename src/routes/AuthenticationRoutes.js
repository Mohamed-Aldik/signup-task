import { lazy } from 'react';
import Loadable from '../components/Loadable';

const Register = Loadable(lazy(() => import('../views/registeration-page')));


const AuthenticationRoutes = {
    path: '/register',
    element: <Register />,
 
};

export default AuthenticationRoutes;
