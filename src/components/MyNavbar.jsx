import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';

const MyNavbar = () => {
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
						{/* <Dropdown
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
								<span className="block text-sm">Bonnie Green</span>
								<span className="block truncate text-sm font-medium">
									name@flowbite.com
								</span>
							</Dropdown.Header>
							<Dropdown.Item>Dashboard</Dropdown.Item>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Earnings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Sign out</Dropdown.Item>
						</Dropdown> */}
						<Navbar.Toggle />
						<Link to={'/login'}>
							<button className="px-5 py-2.5 rounded-lg text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]">
								Login
							</button>
						</Link>
					</div>
					<Navbar.Collapse>
						<Link
							to={'/rooms'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700"
						>
							Rooms
						</Link>
						<Link
							to={'/myBookings'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700"
						>
							Bookings
						</Link>
						<Link
							to={'/contact'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700"
						>
							Contact
						</Link>
						<Link
							to={'/about'}
							className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700"
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
