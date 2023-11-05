import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const MyNavbar = () => {
	const { user, logOut } = useAuth();

	const handleLogOut = () => {
		logOut().then(() => {
			toast.success('User logged out');
		});
	};

	return (
		<>
			<div className="bg-[#D9D9D9]">
				<Navbar fluid rounded className="container bg-transparent">
					<Navbar.Brand href="/">
						<Logo />
						<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							Majesty Royal
						</span>
					</Navbar.Brand>
					<div className="flex md:order-2">
						{user ? (
							<Dropdown
								arrowIcon={false}
								inline
								label={
									<Avatar
										alt="User settings"
										img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
										rounded
									/>
								}
							>
								<Dropdown.Header>
									<span className="block text-sm">{user?.displayName}</span>
									<span className="block truncate text-sm font-medium">
										{user?.email}
									</span>
								</Dropdown.Header>
								<Dropdown.Item>Dashboard</Dropdown.Item>
								<Dropdown.Item>Settings</Dropdown.Item>
								<Dropdown.Item>Earnings</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
							</Dropdown>
						) : (
							<Link to={'/login'}>
								<button className="px-5 py-2.5 rounded-lg text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]">
									Login
								</button>
							</Link>
						)}
						<Navbar.Toggle />
					</div>
					<Navbar.Collapse>
						<Link
							to={'/rooms'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-[#C19B76]"
						>
							Rooms
						</Link>
						<Link
							to={'/myBookings'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-[#C19B76]"
						>
							Bookings
						</Link>
						<Link
							to={'/contact'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-[#C19B76]"
						>
							Contact
						</Link>
						<Link
							to={'/about'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-[#C19B76]"
						>
							About us
						</Link>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default MyNavbar;
