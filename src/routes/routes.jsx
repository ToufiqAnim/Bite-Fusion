import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';

import PrivateRoutes from './PrivateRoutes';
import DashboardHome from '../pages/dashboard/DashboardHome';
import ManageAllRecipe from '../pages/dashboard/ManageAllRecipe';
import Dashbaord from '../layout/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashbord',
    element: (
      <PrivateRoutes>
        <Dashbaord />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'manage-recipes',
        element: <ManageAllRecipe />,
      },
    ],
  },
]);

export default router;
