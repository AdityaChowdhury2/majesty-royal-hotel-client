import { Outlet } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';

const MainLayout = () => {
	return (
		<div className="relative">
			<MyNavbar />

			<Outlet />
		</div>
	);
};

export default MainLayout;
