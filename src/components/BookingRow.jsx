import { Table } from 'flowbite-react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import useAxios from '../hooks/useAxios';
import moment from 'moment';
import { useState } from 'react';
import DeleteBookingModal from './DeleteBookingModal';
import BookingUpdateModal from './BookingUpdateModal';

const BookingRow = ({ booking, refetchBookings }) => {
	const secureAxios = useAxios();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const { seatsCount, _id, bookingDate, roomName, price } = booking;
	function onCloseUpdateModal() {
		setOpenUpdateModal(false);
	}
	const handleDeleteBooking = async () => {
		const loadingToast = toast.loading('Cancelling...');
		const today = moment();
		const bookingDay = moment(bookingDate, 'DD-MM-YYYY');
		const daysDiff = bookingDay.diff(today, 'days');

		if (daysDiff > 1) {
			const response = await secureAxios.delete(`/api/v1/bookings/${_id}`);
			console.log(response.data);
			refetchBookings();
			toast.success('Bookings deleted successfully', { id: loadingToast });
		} else {
			toast.error('Can not cancel booking', { id: loadingToast });
		}
	};

	return (
		<Table.Row
			key={_id}
			className="bg-white dark:border-gray-700 dark:bg-gray-800"
		>
			<Table.Cell className="whitespace-nowrap  font-medium text-gray-900 dark:text-white">
				{roomName}
			</Table.Cell>
			<Table.Cell>{seatsCount}</Table.Cell>
			<Table.Cell>{bookingDate}</Table.Cell>
			<Table.Cell>{price}</Table.Cell>
			<Table.Cell className="space-x-2">
				<button
					onClick={() => {
						setOpenUpdateModal(true);
					}}
					className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
				>
					Update
				</button>
				<BookingUpdateModal
					booking={booking}
					refetchBookings={refetchBookings}
					setOpenUpdateModal={setOpenUpdateModal}
					openUpdateModal={openUpdateModal}
					onCloseUpdateModal={onCloseUpdateModal}
				/>
				<button
					onClick={() => {
						setOpenDeleteModal(true);
					}}
					className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
				>
					Cancel
				</button>
				<DeleteBookingModal
					setOpenDeleteModal={setOpenDeleteModal}
					openDeleteModal={openDeleteModal}
					handleDeleteBooking={handleDeleteBooking}
				/>
			</Table.Cell>
		</Table.Row>
	);
};

BookingRow.propTypes = {
	booking: PropTypes.object,
	refetchBookings: PropTypes.func,
};

export default BookingRow;
