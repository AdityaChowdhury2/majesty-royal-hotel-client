import PropTypes from 'prop-types';

const PageHeader = ({ title }) => {
	return (
		<section className='bg-[url("http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/revslider/parallax-41.jpg")] bg-[#151515] bg-opacity-70 bg-blend-overlay bg-no-repeat bg-center relative'>
			<div className="text-center pt-8 md:pt-24">
				<h2 className="font-gilda-display text-5xl  text-neutral-200 pb-8 md:pb-24">
					{title}
				</h2>
				<ol className="justify-center items-center w-full gap-8 flex flex-wrap pb-4">
					<li className="flex items-center text-neutral-200 space-x-2.5">
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${'bg-[#151515] border-[#151515]'} `}
						>
							1
						</span>
						<span>
							<p className="text-sm">Choose Rooms</p>
						</span>
					</li>
					<li className="flex items-center text-neutral-200 space-x-2.5">
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								title !== 'Rooms' && 'bg-[#151515] border-[#151515]'
							} `}
						>
							2
						</span>
						<span>
							<p className="text-sm">Booking</p>
						</span>
					</li>
					<li className="flex items-center text-neutral-200 space-x-2.5">
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								title !== 'Checkout' &&
								title !== 'Rooms' &&
								'bg-[#151515] border-[#151515]'
							} `}
						>
							3
						</span>
						<span>
							<p className="text-sm">Checkout</p>
						</span>
					</li>
					<li className="flex items-center text-neutral-200 space-x-2.5">
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								title !== 'Rooms' &&
								title !== 'Checkout' &&
								title !== 'Thank You' &&
								'bg-[#151515] border-[#151515]'
							} `}
						>
							4
						</span>
						<span>
							<p className="text-sm">Thank You</p>
						</span>
					</li>
				</ol>
			</div>
		</section>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string,
};

export default PageHeader;
