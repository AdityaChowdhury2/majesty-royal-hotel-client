import { Outlet } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';

const MainLayout = () => {
	return (
		<>
			<MyNavbar />
			<Outlet />
		</>
	);
};

export default MainLayout;
