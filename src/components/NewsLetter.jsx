const NewsLetter = () => {
	return (
		<section className="px-5">
			<div className="flex flex-col container mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-48 my-12">
				<div className="md:flex md:items-center md:justify-center md:w-1/2 bg-[#eee6de] gap-5">
					<div className="px-6 py-6 md:px-8 md:py-0">
						<h2 className="text-lg font-bold text-neutral-700 ">
							Sign Up For <span className="text-[#b16a24]">Best</span> Deals
						</h2>

						<p className="mt-2 text-sm text-neutral-700">
							Be the first to hear about our latest promotions, exclusive deals,
							and exciting updates. By subscribing to our newsletter,
							you&apos;ll receive special offers and travel inspirations right
							in your inbox. Join our community of travelers and unlock a world
							of fantastic deals. Sign up now and start receiving the best hotel
							offers and travel tips!
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

							<button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#C19B76] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
								subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
