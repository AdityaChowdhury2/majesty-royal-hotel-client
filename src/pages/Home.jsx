import { Helmet } from 'react-helmet-async';
import Testimonial from '../components/Testimonial';

import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import Banner from '../components/Banner/Banner';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Majesty Royal || Home</title>
			</Helmet>
			<Banner />
			<Pricing />
			<WhyChooseUs />
			<Testimonial />
		</>
	);
};

export default Home;
