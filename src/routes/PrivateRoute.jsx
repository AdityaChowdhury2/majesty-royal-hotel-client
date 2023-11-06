import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import Loading from '../components/shared/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex justify-center items-center h-96">
				<Loading />
			</div>
		);
	}
	if (!user) {
		return <Navigate to={'/login'} state={location.pathname} />;
	}
	return <>{children}</>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
