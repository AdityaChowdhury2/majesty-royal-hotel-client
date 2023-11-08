import { FcApproval } from 'react-icons/fc';

const Pricing = () => {
	return (
		<section className="mt-8">
			<div className="container flex flex-col items-center mx-auto mb-5 md:mb-8 lg:mb-12 md:p-10 md:px-12">
				<h1 className="p-4 text-xl md:text-2xl lg:text-4xl font-semibold  text-center">
					Featured Room
				</h1>
			</div>
			<div className="bg-[url('https://i.ibb.co/gjhTGn9/banner.jpg')] bg-center bg-no-repeat bg-fixed bg-neutral-700 bg-blend-overlay bg-opacity-90">
				<div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div className="mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:grid-cols-3 justify-items-center">
						<div className="p-6 w-full bg-neutral-50 rounded-3xl bg-opacity-75">
							<div className="flex flex-col p-4">
								<div className="py-6">
									<h2 className="text-5xl font-thin leading-6 text-neutral-600">
										<span className="ml-auto font-extrabold text-neutral-600">
											$107{' '}
										</span>
										<del className="text-3xl font-medium text-dim">$179</del>
									</h2>
									<p className="mt-6 text-xl font-semibold text-neutral-600">
										Deluxe Suite
									</p>

									<p className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 mt-2 w-full">
										Complementary breakfast
									</p>
								</div>
							</div>
							<div className="p-4">
								<ul className={`mt-4 space-y-3 list-outside`}>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Spacious and elegantly furnished suite
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Flat-screen TV with cable channels
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											King-size bed with premium bedding
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Private balcony with scenic views
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											En-suite bathroom with a bathtub
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Complimentary high-speed Wi-Fi
										</span>
									</li>
								</ul>
							</div>
							<a
								href="https://wicked-templates.gumroad.com/l/wicked-team-tier/40dark"
								className="w-full items-center block px-10 py-3.5 text-xs font-medium text-center text-[#C19B76] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
							>
								More Info
							</a>
						</div>
						<div className="relative w-full p-6 bg-[#C19B76] rounded-3xl bg-opacity-75">
							<div className="absolute inset-x-0 transform translate-y-px -top-1">
								<div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
									<span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-white border-8 border-[#C19B76] text-gray-800 rounded-xl">
										Best Value{' '}
									</span>
								</div>
							</div>
							<div className="flex flex-col p-4">
								<div className="py-6">
									<h2 className="text-5xl font-thin leading-6 text-white">
										<span className="ml-auto font-extrabold text-white">
											$53{' '}
										</span>
										<del className="text-3xl font-medium text-white">$89</del>
									</h2>
									<p className="mt-6 text-xl font-semibold text-white">
										Family Suite
									</p>
									<p className="inline-flex items-center px-3 mt-2 py-1.5 rounded-lg text-xs font-medium bg-white w-full text-[#C19B76]">
										In-room laundry facilities
									</p>
								</div>
							</div>
							<div className="p-4">
								<ul className="mt-4 space-y-3 ">
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											Complimentary breakfast for all guests
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											Fully-equipped kitchenette
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											LCD TVs in each room
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											Kid-friendly amenities available
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											High-speed Wi-Fi for staying connected
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-white">
											Two separate bedrooms with King Size Beds
										</span>
									</li>
								</ul>
							</div>
							<div>
								<a
									href="#"
									className="w-full items-center block px-10 py-3.5 text-xs font-medium text-center text-[#C19B76] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
								>
									More Info
								</a>
							</div>
						</div>
						<div className="p-6 w-full bg-neutral-50 rounded-3xl bg-opacity-75">
							<div className="flex flex-col p-4">
								<div className="py-6">
									<h2 className="text-5xl font-thin leading-6 text-neutral-600">
										<span className="ml-auto font-extrabold text-neutral-600">
											$29
										</span>
										<del className="text-3xl font-medium text-dim">$49</del>
									</h2>
									<p className="mt-6 text-xl font-semibold text-neutral-600">
										Executive Room
									</p>
									<p className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-500 mt-2 w-full">
										Free turndown service
									</p>
								</div>
							</div>
							<div className="p-4">
								<ul role="list" className="mt-4 space-y-3 prose list-disc">
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Well-lit work area with a desk and chair
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											High-speed internet and a direct-dial phone
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											In-room safe for your valuables
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Concierge service and priority check-in
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Access to the executive lounge
										</span>
									</li>
									<li className="flex space-x-3 items-center">
										<FcApproval size={16} />
										<span className="text-xs text-neutral-600">
											Coffee machine for a quick caffeine fix
										</span>
									</li>
								</ul>
							</div>
							<a
								href="#"
								className="w-full items-center block px-10 py-3.5 text-xs font-medium text-center text-[#C19B76] transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
							>
								More Info
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
