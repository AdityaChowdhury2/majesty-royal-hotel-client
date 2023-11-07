import PropTypes from 'prop-types';
import useAxios from '../hooks/useAxios';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';

const ConfirmBookingModal = ({
	setOpenConfirmModal,
	openConfirmModal,
	bookingDetails,
	refetch,
	calculatePriceAfterDiscount,
	room,
}) => {
	const params = useParams();
	const axiosSecure = useAxios();
	const { mutateAsync } = useMutation({
		mutationFn: async data => {
			const response = await axiosSecure.post('/api/v1/user/book-room', data);
			return response.data;
		},
		onSuccess: () => {
			toast.success('Booking confirmed');
		},

		onError: () => {
			toast.error('Booking error');
		},
	});
	console.log(bookingDetails);
	const handleBooking = async () => {
		console.log(bookingDetails);
		try {
			console.log(bookingDetails);
			await mutateAsync(bookingDetails);
			axiosSecure
				.patch(`/api/v1/room/${params.roomId}`, {
					seatsCount: bookingDetails.seatsCount,
				})
				.then(res => {
					console.log(res);
					refetch();
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Modal
			show={openConfirmModal}
			size="md"
			onClose={() => setOpenConfirmModal(false)}
			popup
		>
			<Modal.Header />
			<Modal.Body>
				<div className="">
					<div className="space-y-2 mb-10">
						<h3 className="text-3xl text-center">{room.roomName}</h3>
						<p className="text-xs">
							<span className="font-bold">Description:</span>
							{room.roomDescription}
						</p>
						<p className="text-xs">
							<span className="font-bold">Discounted Price: </span>
							{calculatePriceAfterDiscount}
						</p>
						<p className="text-xs">
							<span className="font-bold">Booking Date:</span>{' '}
							{bookingDetails.bookingDate}
						</p>
					</div>
					<div className="flex justify-center gap-4 ">
						<Button
							color="green"
							onClick={() => {
								handleBooking();
								setOpenConfirmModal(false);
							}}
						>
							{"Yes, I'm sure"}
						</Button>
						<Button color="red" onClick={() => setOpenConfirmModal(false)}>
							No, cancel
						</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

ConfirmBookingModal.propTypes = {
	setOpenConfirmModal: PropTypes.func,
	openConfirmModal: PropTypes.bool,
	bookingDetails: PropTypes.object,
	refetch: PropTypes.func,
	room: PropTypes.object,
	calculatePriceAfterDiscount: PropTypes.number,
};

export default ConfirmBookingModal;
