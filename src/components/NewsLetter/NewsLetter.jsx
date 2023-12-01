import {
	LayerGroup,
	MapContainer,
	Marker,
	Popup,
	TileLayer,
} from 'react-leaflet';
import './NewsLetter.css';
import 'leaflet/dist/leaflet.css';

const NewsLetter = () => {
	const center = [22.34217462083382, 91.83676088176085];
	const overLay = (
		<div className="absolute z-[999] bottom-0 w-8/12 left-[16%]">
			<div className="flex flex-col container mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-48 my-12">
				<div className="md:flex md:items-center md:justify-center md:w-1/2 bg-[#eee6de] gap-5">
					<div className="px-6 py-6 md:px-8 md:py-0">
						<h2 className="text-lg font-bold text-neutral-700 ">
							Sign Up For <span className="text-[#b16a24]">Best</span> Deals
						</h2>

						<p className="mt-2 text-sm text-neutral-700">
							Join our community of travelers and unlock a world of fantastic
							deals.
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
					<form>
						<div className="flex flex-col p-1.5 overflow-hidden border rounded-lg lg:flex-row gap-4">
							<input
								className="px-6 py-2 text-[#C19B76] placeholder-gray-500 bg-white border-1 border-gray-300 rounded-md ring-0 focus:ring-0 focus:placeholder-transparent"
								type="email"
								name="email"
								placeholder="Enter your email"
								aria-label="Enter your email"
							/>

							<button
								className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform  rounded-md  focus:outline-none
							 bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76]
							"
							>
								subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
	return (
		<section className="px-5 relative">
			<MapContainer center={center} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LayerGroup>
					<Marker position={center}>
						<Popup>We are here</Popup>
					</Marker>
				</LayerGroup>
				{overLay}
			</MapContainer>
		</section>
	);
};

export default NewsLetter;
