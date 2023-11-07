import { Table } from 'flowbite-react';
import PageHeader from '../components/shared/PageHeader';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Loading from '../components/shared/Loading';

const Bookings = () => {
	const { user } = useAuth();
	const axiosSecure = useAxios();
	const { data: bookings, isLoading } = useQuery({
		queryKey: ['bookings', user.uid],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/api/v1/bookings/?uid=${user.uid}`
			);
			return response.data;
		},
	});
	console.log(bookings);
	return (
		<div>
			<PageHeader title={'Bookings'} />
			<h1 className="font-gilda-display text-4xl text-center my-5">
				See your Bookings
			</h1>

			{isLoading ? (
				<>
					<Loading />
				</>
			) : (
				<Table striped className="my-5">
					<Table.Head>
						<Table.HeadCell>Room name</Table.HeadCell>
						<Table.HeadCell>Seats</Table.HeadCell>
						<Table.HeadCell>Date</Table.HeadCell>
						<Table.HeadCell>Price</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{bookings.map(booking => (
							<Table.Row
								key={booking._id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{booking.roomName}
								</Table.Cell>
								<Table.Cell>{booking.seatsCount}</Table.Cell>
								<Table.Cell>{booking.bookingDate}</Table.Cell>
								<Table.Cell>{booking.price}</Table.Cell>
								<Table.Cell className="space-x-2">
									<button className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300">
										Update
									</button>
									<button className="px-3 py-1 rounded-md bg-red-400 hover:bg-red-500 text-white transition-all duration-300">
										Delete
									</button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			)}
			{/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell>White</Table.Cell>
						<Table.Cell>Laptop PC</Table.Cell>
						<Table.Cell>$1999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell>Black</Table.Cell>
						<Table.Cell>Accessories</Table.Cell>
						<Table.Cell>$99</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Google Pixel Phone
						</Table.Cell>
						<Table.Cell>Gray</Table.Cell>
						<Table.Cell>Phone</Table.Cell>
						<Table.Cell>$799</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Apple Watch 5
						</Table.Cell>
						<Table.Cell>Red</Table.Cell>
						<Table.Cell>Wearables</Table.Cell>
						<Table.Cell>$999</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row> */}
		</div>
	);
};

export default Bookings;
