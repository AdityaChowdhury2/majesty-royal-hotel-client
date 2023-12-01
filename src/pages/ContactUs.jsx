import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/shared/PageHeader';

const ContactUs = () => {
	return (
		<>
			<Helmet>
				<title>Majesty Royal || Gallery</title>
			</Helmet>
			<PageHeader title={'Contact Us'} />

			<section className="bg-gray-100">
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
						<div className="lg:col-span-2 lg:py-12">
							<p className="max-w-xl text-lg">
								Thank you for considering Majesty Royal for your upcoming stay.
								We&apos;re here to assist you with any inquiries or requests you
								may have. Please feel free to contact us using the information
								below:
							</p>

							<div className="mt-4 grid grid-cols-5 gap-6 text-sm  ">
								<h4
									className="font-bold
                                "
								>
									Address
								</h4>
								<address className=" col-span-4 ">
									123 Main Street <br />
									Anytown, <br />
									USA 12345
								</address>
							</div>
							<div className="mt-4 grid grid-cols-5 gap-6 text-sm ">
								<h4
									className="font-bold
                                "
								>
									Phone
								</h4>
								<div className="col-span-4">
									<p className="font-bold text-sm font-gilda-display">
										Main Reservation:{' '}
										<span className="font-normal">1234567895</span>
									</p>
									<p className="font-bold text-sm font-gilda-display">
										Front Desk: <span className="font-normal">1234567895</span>
									</p>
								</div>
							</div>
							<div className="mt-4 grid grid-cols-5 gap-6 text-sm ">
								<h4
									className="font-bold
                                "
								>
									Email
								</h4>
								<div className="col-span-4">
									<p className="font-bold text-sm font-gilda-display">
										General Inquiries:{' '}
										<span className="font-normal">
											query.majesty-royal.gmail.com
										</span>
									</p>
									<p className="font-bold text-sm font-gilda-display">
										Reservations:{' '}
										<span className="font-normal">
											reservation.majesty-royal.gmail.com
										</span>
									</p>
									<p className="font-bold text-sm font-gilda-display">
										Customer Support:{' '}
										<span className="font-normal">
											support.majesty-royal.gmail.com
										</span>
									</p>
								</div>
							</div>
						</div>

						<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
							<form action="" className="space-y-4">
								<div>
									<label className="sr-only" htmlFor="name">
										Name
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Name"
										type="text"
										id="name"
									/>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label className="sr-only" htmlFor="email">
											Email
										</label>
										<input
											className="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Email address"
											type="email"
											id="email"
										/>
									</div>

									<div>
										<label className="sr-only" htmlFor="phone">
											Phone
										</label>
										<input
											className="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Phone Number"
											type="tel"
											id="phone"
										/>
									</div>
								</div>
								<div>
									<label className="sr-only" htmlFor="message">
										Message
									</label>

									<textarea
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Message"
										rows="8"
										id="message"
									></textarea>
								</div>

								<div className="mt-4">
									<button
										type="submit"
										className="inline-block w-full rounded-lg bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] px-5 py-3 font-medium text-white sm:w-auto"
									>
										Send Enquiry
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
