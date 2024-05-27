import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';

import PrivateRoutes from './PrivateRoutes';
import DashboardHome from '../pages/dashboard/DashboardHome';
import ManageAllRecipe from '../pages/dashboard/ManageAllRecipe';
import Dashbaord from '../layout/Dashboard';
import AddRecipe from '../pages/dashboard/AddRecipe';
import EditRecipe from '../pages/dashboard/EditRecipe';
import Recipe from '../pages/About';
import RecipeDetails from '../pages/dashboard/RecipeDetails';

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
        path: 'recipe',
        element: <Recipe />,
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
      {
        path: 'add-recipes',
        element: <AddRecipe />,
      },
      {
        path: 'edit-recipe/:id',
        element: <EditRecipe />,
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetails />,
      },
    ],
  },
]);

export default router;
