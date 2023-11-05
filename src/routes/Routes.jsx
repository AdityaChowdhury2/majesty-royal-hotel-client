import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorElement from '../pages/ErrorElement';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Rooms from '../pages/Rooms/Rooms';
import Bookings from '../pages/Bookings';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/rooms',
				element: <Rooms />,
			},
			{
				path: '/bookings',
				element: <Bookings />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]);

export default Routes;
