import { Footer } from 'flowbite-react';
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
} from 'react-icons/bs';
import Logo from './Logo';

const MyFooter = () => {
	return (
		<div className="bg-[#D9D9D9] px-5">
			<Footer className="container py-5 shadow-none bg-[#D9D9D9]">
				<div className="w-full">
					<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div>
							<Footer.Brand href="/">
								<Logo />
								<span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold dark:text-white font-gilda-display">
									Majesty Royal
								</span>
							</Footer.Brand>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<Footer.Title title="about" />
								<Footer.LinkGroup col>
									<Footer.Link href="#">Career</Footer.Link>
									<Footer.Link href="#">About Us</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="Follow us" />
								<Footer.LinkGroup col>
									<Footer.Link href="#">Github</Footer.Link>
									<Footer.Link href="#">Discord</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="Legal" />
								<Footer.LinkGroup col>
									<Footer.Link href="#">Privacy Policy</Footer.Link>
									<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
								</Footer.LinkGroup>
							</div>
						</div>
					</div>
					<Footer.Divider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<Footer.Copyright href="#" by="Majesty Royal" year={2023} />
						<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
							<Footer.Icon href="#" icon={BsFacebook} />
							<Footer.Icon href="#" icon={BsInstagram} />
							<Footer.Icon href="#" icon={BsTwitter} />
							<Footer.Icon href="#" icon={BsGithub} />
							<Footer.Icon href="#" icon={BsDribbble} />
						</div>
					</div>
				</div>
			</Footer>
		</div>
	);
};

export default MyFooter;
