import { Button, Modal } from 'flowbite-react';
import PropTypes from 'prop-types';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const DeleteBookingModal = ({
	setOpenDeleteModal,
	openDeleteModal,
	handleDeleteBooking,
}) => {
	return (
		<Modal
			show={openDeleteModal}
			size="md"
			onClose={() => setOpenDeleteModal(false)}
			popup
		>
			<Modal.Header />
			<Modal.Body>
				<div className="text-center">
					<HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
					<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
						Are you sure you want to cancel this booking?
					</h3>
					<div className="flex justify-center gap-4">
						<Button
							color="failure"
							onClick={() => {
								handleDeleteBooking();
								setOpenDeleteModal(false);
							}}
						>
							{"Yes, I'm sure"}
						</Button>
						<Button color="gray" onClick={() => setOpenDeleteModal(false)}>
							No, cancel
						</Button>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

DeleteBookingModal.propTypes = {
	setOpenDeleteModal: PropTypes.func,
	openDeleteModal: PropTypes.bool,
	handleDeleteBooking: PropTypes.func,
};

export default DeleteBookingModal;
