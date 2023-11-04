import { useState } from 'react';

const useShowPassword = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return [isShowPassword, setIsShowPassword];
};

export default useShowPassword;
