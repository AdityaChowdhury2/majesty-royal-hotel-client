import { Table } from 'flowbite-react';
import PageHeader from '../components/shared/PageHeader';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Loading from '../components/shared/Loading';

import BookingRow from '../components/BookingRow';

const Bookings = () => {
	const { user } = useAuth();
	const axiosSecure = useAxios();
	const {
		data: bookings,
		isLoading,
		refetch: refetchBookings,
	} = useQuery({
		queryKey: ['bookings', user.email],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/api/v1/bookings/?email=${user.email}`
			);
			return response.data;
		},
		retry: 5,
	});
	return (
		<div className="space-y-12">
			<PageHeader title={'Bookings'} />
			<h1 className="font-gilda-display text-4xl text-center my-5">
				See your Bookings
			</h1>

			{isLoading ? (
				<>
					<Loading />
				</>
			) : (
				<Table striped className="my-12 container">
					<Table.Head>
						<Table.HeadCell>Room name</Table.HeadCell>
						<Table.HeadCell>Seats</Table.HeadCell>
						<Table.HeadCell>Date</Table.HeadCell>
						<Table.HeadCell>Price</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{bookings.map(booking => (
							<BookingRow
								key={booking._id}
								booking={booking}
								refetchBookings={refetchBookings}
							/>
						))}
					</Table.Body>
				</Table>
			)}
		</div>
	);
};

export default Bookings;
