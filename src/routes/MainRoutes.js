import { lazy } from 'react';
import Loadable from '../components/Loadable';

const Home:any = Loadable(lazy(() => import('../views/home')));


const MainRoutes = {
    path: '/',
    element: <Home />,
};

export default MainRoutes;
