import secureLogin from '../assets/images/secureLogin.svg';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi';
import useShowPassword from '../hooks/useShowPassword';
import { useState } from 'react';
import SocialLogin from '../components/shared/SocialLogin';
import { Link } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';
import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxios from '../hooks/useAxios';

const Register = () => {
	const { createUser, user, updateUser, setUser } = useAuth();
	const [isShowPassword, setIsShowPassword] = useShowPassword();
	const [userForm, setUserForm] = useState();
	const secureAxios = useAxios();

	const handleInputField = e => {
		setUserForm({ ...userForm, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		console.log(userForm);
		const fullName =
			userForm.firstName.toUpperCase() + ' ' + userForm.lastName.toUpperCase();
		createUser(userForm)
			.then(res => {
				console.log(res.user);
				updateUser({
					displayName: fullName,
				})
					.then(() => {
						setUser({ ...user, email: res.user.email, displayName: fullName });
						secureAxios
							.post('/api/v1/user', {
								email: res.user.email,
								displayName: fullName,
								photoURL: res.user.photoURL,
								uid: res.user.uid,
							})
							.then(() => {})
							.catch(err => {
								console.log(err);
								toast.error('User not Added in our database');
							});

						toast.success('User Registration completed Successfully!');
					})
					.catch(err => console.log(err));
			})
			.catch(() => {
				toast.error('OOPS! Something went wrong.');
			});
	};

	return (
		<>
			<Helmet>
				<title>Majesty Royal || Registration</title>
			</Helmet>
			<MyNavbar />
			<div className="min-w-screen min-h-[85vh]  flex items-center justify-center px-5 py-5">
				<div
					className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
					style={{ maxWidth: '1000px' }}
				>
					<div className="md:flex w-full">
						<div className="hidden md:flex w-1/2 bg-slate-900 py-10 px-10 bg-opacity-5">
							<img src={secureLogin} alt="" />
						</div>
						<div className="w-full md:w-1/2 py-10 px-5 md:px-10">
							<div className="text-center mb-10">
								<h1 className="font-bold text-3xl text-gray-900 font-gilda-display">
									REGISTER
								</h1>
								<p>Enter your information to register</p>
							</div>
							<form onSubmit={handleFormSubmit}>
								<div className="flex -mx-3">
									<div className="w-1/2 px-3 mb-5">
										<label className="text-xs font-semibold px-1">
											First name
										</label>
										<div className="flex">
											<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
												<AiOutlineUser className="text-[#C19B76]" />
											</div>
											<input
												type="text"
												name="firstName"
												className="w-full -ml-10 pl-10 pr-3 py-2 bg-[#F9F9F9] rounded-lg border-2 border-gray-200 outline-none focus:border-[#C19B76] focus:outline-none focus:ring-0"
												placeholder="John"
												onChange={handleInputField}
											/>
										</div>
									</div>
									<div className="w-1/2 px-3 mb-5">
										<label className="text-xs font-semibold px-1">
											Last name
										</label>
										<div className="flex">
											<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
												<AiOutlineUser className="text-[#C19B76]" />
											</div>
											<input
												type="text"
												name="lastName"
												className="w-full -ml-10 pl-10 pr-3 py-2 bg-[#F9F9F9] rounded-lg border-2 border-gray-200 outline-none focus:border-[#C19B76] focus:outline-none focus:ring-0"
												placeholder="Smith"
												onChange={handleInputField}
											/>
										</div>
									</div>
								</div>
								<div className="flex -mx-3">
									<div className="w-full px-3 mb-5">
										<label className="text-xs font-semibold px-1">Email</label>
										<div className="flex">
											<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
												<AiOutlineMail className="text-[#C19B76]" />
											</div>
											<input
												type="email"
												name="email"
												className="w-full -ml-10 pl-10 pr-3 py-2 bg-[#F9F9F9] rounded-lg border-2 border-gray-200 outline-none focus:border-[#C19B76] focus:outline-none focus:ring-0"
												placeholder="johnsmith@example.com"
												onChange={handleInputField}
											/>
										</div>
									</div>
								</div>

								<div className="flex -mx-3">
									<div className="w-full px-3 mb-12">
										<label className="text-xs font-semibold px-1">
											Password
										</label>
										<div className="flex relative">
											<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
												<BiLockAlt className="text-[#C19B76]" />
											</div>
											<input
												type={isShowPassword ? 'text' : 'password'}
												name="password"
												className="w-full -ml-10 pl-10 pr-3 py-2 bg-[#F9F9F9] rounded-lg border-2 border-gray-200 outline-none focus:border-[#C19B76] focus:outline-none focus:ring-0"
												placeholder="************"
												onChange={handleInputField}
											/>
											<div
												className="absolute top-1/3 right-3 cursor-pointer"
												onClick={() => setIsShowPassword(!isShowPassword)}
											>
												{isShowPassword ? (
													<PiEyeClosedLight className="text-[#C19B76]" />
												) : (
													<PiEyeLight className="text-[#C19B76]" />
												)}
											</div>
										</div>
									</div>
								</div>
								<div className="flex -mx-3">
									<div className="w-full px-3 mb-5">
										<button className="block w-full max-w-xs mx-auto bg-[#C19B76] hover:bg-[#b89470] focus:bg-[#C19B76] text-white rounded-lg px-3 py-3 font-semibold font-gilda-display">
											REGISTER NOW
										</button>
									</div>
								</div>
							</form>
							<p className="text-center">
								Already Have an account?{' '}
								<Link className="text-[#C19B76]" to={'/login'}>
									Sign In
								</Link>
							</p>
							<div className="my-5 before:w-1/3 before:content-[''] before:bg-[#C19B76] before:divide-x-0 before:absolute relative before:top-2.5 before:h-0.5 before:rounded-sm after:w-1/3 after:content-[''] after:bg-[#C19B76] after:absolute after:top-2.5 before:left-9 after:right-9 after:h-0.5 text-center text-[#C19B76]">
								OR
							</div>
							<SocialLogin />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
