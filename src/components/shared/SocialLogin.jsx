const SocialLogin = () => {
	return (
		<div className="max-w-xs mx-auto">
			<button className="relative w-full  bg-[#4285f4] hover:bg-[#005efa]  text-white rounded-lg px-3 py-3 font-semibold">
				<div className="absolute left-1 p-2 bg-white top-1 rounded-lg">
					<img
						className=" "
						src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c96701d9ca53fae09d146_google.svg"
						alt=""
					/>
				</div>
				<p>Continue with Google</p>
			</button>
		</div>
	);
};

export default SocialLogin;
