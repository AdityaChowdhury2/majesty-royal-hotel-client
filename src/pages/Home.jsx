import { Helmet } from 'react-helmet-async';
import Testimonial from '../components/Testimonial';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Majesty Royal || Home</title>
			</Helmet>
			<p> Hello I Am Home </p>
			<Testimonial />
		</div>
	);
};

export default Home;
