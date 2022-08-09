import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/user';
import { useGetCurrentUser } from '../quries/auth/useGetCurrentUser';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
	const token = localStorage.getItem('token');
	const [user, setUser] = useRecoilState(userState);

	useGetCurrentUser(token, user, setUser);

	return <>{children}</>;
};

export default AuthProvider;
