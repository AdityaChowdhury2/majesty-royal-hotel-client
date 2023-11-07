import { Helmet } from 'react-helmet-async';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';

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
