import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';  // Only one import for Dashboard
// import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
