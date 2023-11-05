import { Label, Select } from 'flowbite-react';
import PageHeader from '../../components/shared/PageHeader';
import { useState } from 'react';
import './Rooms.css';

const Rooms = () => {
	const [sortingOrder, setSortingOrder] = useState(1);
	const [priceRange, setPriceRange] = useState(550);

	const onSortingOrderChange = e => {
		setSortingOrder(e.target.value);
	};
	const onPriceRangeChange = e => {
		setPriceRange(e.target.value);
	};

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
							<option value={1}>Lowest Price</option>
							<option value={-1}>Highest Price</option>
						</Select>
					</div>
				</div>
			</section>
		</>
	);
};

export default Rooms;
