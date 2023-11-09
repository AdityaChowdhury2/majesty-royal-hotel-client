import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorElement from '../pages/ErrorElement';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Rooms from '../pages/Rooms/Rooms';
import Bookings from '../pages/Bookings';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery/Gallery';

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
				path: '/contact',
				element: <ContactUs />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
			{
				path: '/room/:roomId',
				element: (
					<PrivateRoute>
						<RoomDetails />
					</PrivateRoute>
				),
			},
			{
				path: '/bookings',
				element: (
					<PrivateRoute>
						<Bookings />
					</PrivateRoute>
				),
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
