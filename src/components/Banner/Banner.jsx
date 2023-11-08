import './Banner.css';

const Banner = () => {
	return (
		<swiper-container
			style={{
				'--swiper-pagination-color': '#C19B76',
				'--swiper-pagination-bullet-inactive-color': '#999999',
				'--swiper-pagination-bullet-inactive-opacity': '1',
				'--swiper-pagination-bullet-size': '12px',
				'--swiper-pagination-bullet-horizontal-gap': '4px',
			}}
			className="mySwiper"
			pagination="true"
			pagination-clickable="true"
			pagination-dynamic-bullets="true"
			parallax="true"
			speed="1800"
			autoplay-delay="2500"
			autoplay-disable-on-interaction="false"
		>
			<div
				slot="container-start"
				className="parallax-bg bg-neutral-700 bg-blend-overlay "
				style={{
					backgroundImage: `url('https://i.ibb.co/C8HgNcJ/banner1.jpg')`,
				}}
				data-swiper-parallax="-23%"
			></div>

			<swiper-slide>
				<div className={'py-40 text-center'}>
					<div
						className="title font-gilda-display "
						data-swiper-parallax="-300"
					>
						Unwind in Luxurious Comfort
					</div>
					<div
						className="text md:max-w-lg lg:max-w-xl mx-auto"
						data-swiper-parallax="-100"
					>
						<p className="text-xl">
							Experience opulence like never before. Our premium suites offer
							the perfect blend of modern amenities and timeless elegance.
							Unwind in spacious rooms with stunning views and indulge in
							personalized services that cater to your every need.
						</p>
					</div>
					<button
						data-swiper-parallax="-300"
						className="mt-12 px-5 py-2.5 rounded-lg text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]"
					>
						Book Now
					</button>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className={'py-40 text-center'}>
					<div
						className="title font-gilda-display "
						data-swiper-parallax="-300"
					>
						Discover Local Charm
					</div>
					<div
						className="text md:max-w-lg lg:max-w-xl mx-auto"
						data-swiper-parallax="-100"
					>
						<p className="text-xl">
							Explore the rich culture and heritage of our location. Immerse
							yourself in local traditions, flavors, and experiences. From
							vibrant markets to historic landmarks, your adventure awaits just
							steps from our doorstep.
						</p>
					</div>
					<button
						data-swiper-parallax="-300"
						className="mt-12 px-5 py-2.5 rounded-lg text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]"
					>
						Book Now
					</button>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className={'py-40 text-center'}>
					<div
						className="title font-gilda-display "
						data-swiper-parallax="-300"
					>
						Special Offers Await
					</div>
					<div
						className="text md:max-w-lg lg:max-w-xl mx-auto"
						data-swiper-parallax="-100"
					>
						<p className="text-xl">
							Your dream getaway is now even more inviting. Don&apos;t miss our
							exclusive limited-time offers, including discounted room rates,
							romantic packages, and family-friendly deals. Book today and
							create unforgettable memories.
						</p>
					</div>
					<button
						data-swiper-parallax="-300"
						className="mt-12 px-5 py-2.5 rounded-lg text-white bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]"
					>
						Book Now
					</button>
				</div>
			</swiper-slide>
		</swiper-container>
	);
};

export default Banner;
