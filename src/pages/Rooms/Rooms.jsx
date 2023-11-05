import { Label, Select } from 'flowbite-react';
import PageHeader from '../../components/shared/PageHeader';
import { useState } from 'react';
import './Rooms.css';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import loading from '../../assets/animations/loading.json';
import notFound from '../../assets/animations/notFound.json';
import RoomCard from '../../components/RoomCard';
import Pagination from '../../components/Pagination';
import Lottie from 'lottie-react';

const Rooms = () => {
	const [sortingOrder, setSortingOrder] = useState(-1);
	const [priceRange, setPriceRange] = useState(550);
	const [currentPage, setCurrentPage] = useState(0);
	const axiosSecure = useAxios();
	const onSortingOrderChange = e => {
		setCurrentPage(0);
		setSortingOrder(e.target.value);
	};
	const onPriceRangeChange = e => {
		setCurrentPage(0);
		setPriceRange(e.target.value);
	};

	const roomsPerPage = 4;
	const { data, isError, isLoading } = useQuery({
		queryKey: ['rooms', sortingOrder, priceRange, currentPage],
		queryFn: async () => {
			const response = await axiosSecure.get(
				`/api/v1/room/?sortingOrder=${sortingOrder}&priceRange=${priceRange}&currentPage=${currentPage}`
			);
			return response.data;
		},
		retry: 4,
	});
	const { result: rooms, total } = data || {};
	let pages = [];
	if (total) {
		pages = [...Array(Math.ceil(total / roomsPerPage)).keys()];
	}

	// console.log(pages);
	return (
		<>
			<PageHeader title={'Rooms'} />
			<section className="py-5 bg-[#D9D9D9]">
				<div className="flex justify-center gap-5 container">
					<div className="flex items-center gap-5 max-w-md">
						<div className="block">
							<Label htmlFor="filter" value="Filter by Price" />
						</div>
						<Select id="filter" required onChange={onPriceRangeChange}>
							<option value={550}>All Products</option>
							<option value={350}>less then 350</option>
							<option value={250}>less then 250</option>
							<option value={150}>less then 150</option>
						</Select>
					</div>
					<div className="flex items-center gap-5 max-w-md">
						<div className="block">
							<Label htmlFor="sortingOrder" value="Sort By Price" />
						</div>
						<Select id="sortingOrder" required onChange={onSortingOrderChange}>
							<option value={1}>Lowest Price first</option>
							<option value={-1}>Highest Price first</option>
						</Select>
					</div>
				</div>
			</section>
			<section
				className="container py-12
			"
			>
				<div className="grid grid-cols-12 gap-5 px-5">
					<div className="col-span-12 xl:col-span-4 relative drop-shadow-2xl gap-5 sm:min-h-fit">
						<div className="relative ">
							<img
								src="https://i.ibb.co/wSNtf4k/side-Image1.jpg"
								className="w-2/3  rounded-md"
								alt=""
							/>
							<img
								src="https://i.ibb.co/71ZQzvQ/side-Image2.jpg"
								className="rounded-md absolute right-4 top-1/2 w-2/3"
								alt=""
							/>
						</div>
					</div>
					{isLoading ? (
						<div className="col-span-12 md:col-span-8 ">
							<Lottie animationData={loading}></Lottie>
						</div>
					) : isError ? (
						<div className="col-span-12 md:col-span-8 ">
							<Lottie animationData={notFound} loop={false}></Lottie>
						</div>
					) : (
						<div className="col-span-12 xl:col-span-8">
							<div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5">
								{rooms.map(room => (
									<RoomCard key={room._id} room={room} />
								))}
							</div>
							{total > 4 ? (
								<div className="my-8 flex justify-center">
									<Pagination
										setCurrentPage={setCurrentPage}
										currentPage={currentPage}
										pages={pages}
									/>
								</div>
							) : (
								<></>
							)}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Rooms;
