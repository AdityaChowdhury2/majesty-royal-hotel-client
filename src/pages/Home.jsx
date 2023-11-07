import { Helmet } from 'react-helmet-async';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import Pricing from '../components/Pricing';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Majesty Royal || Home</title>
			</Helmet>
			<Banner />
			<Pricing />
			<Testimonial />
		</>
	);
};

export default Home;
