import PageHeader from '../../components/shared/PageHeader';
import Slide1 from './Slide1';
import './Gallery.css';
import Slide3 from './Slide3';
import Slide2 from './Slide2';

const Gallery = () => {
	return (
		<section className="text-gray-600 body-font gallery">
			<PageHeader title={'Gallery'} />
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex w-full mb-20 flex-wrap">
					<h1 className="sm:text-3xl text-2xl text-gray-900 lg:w-1/3 lg:mb-0 mb-4 font-gilda-display font-bold">
						A Visual Journey Through Majesty Royal Hotel
					</h1>
					<p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
						Step into the visual feast that is Majesty Royal Hotel. Our gallery
						showcases the elegance, luxury, and exceptional experiences that
						await you. Explore the stunning rooms, captivating surroundings,
						delectable dining, and the heartfelt hospitality that defines us.
						Discover why Majesty Royal Hotel is more than a destination;
						it&apos;s an unforgettable experience. We invite you to preview the
						beauty that awaits you during your stay with us.
					</p>
				</div>

				<swiper-container
					class="mySwiper"
					pagination="true"
					pagination-clickable="true"
					pagination-dynamic-bullets="true"
					speed="1800"
					autoplay-delay="2500"
					space-between="30"
					autoplay-disable-on-interaction="false"
					style={{
						'--swiper-pagination-color': '#C19B76',
						'--swiper-pagination-bullet-inactive-color': '#999999',
						'--swiper-pagination-bullet-inactive-opacity': '1',
						'--swiper-pagination-bullet-size': '12px',
						'--swiper-pagination-bullet-horizontal-gap': '4px',
					}}
				>
					<swiper-slide>
						<Slide1 />
					</swiper-slide>
					<swiper-slide>
						<Slide2 />
					</swiper-slide>
					<swiper-slide>
						<Slide3 />
					</swiper-slide>
				</swiper-container>
			</div>
		</section>
	);
};

export default Gallery;
