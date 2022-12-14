import React, { FC } from 'react';
import { signInState, SignInValidates } from '../../../atoms/signIn';
import { signUpState, SignUpValidates } from '../../../atoms/signUp';
import { useRecoilState } from 'recoil';

interface IAccountHeaderProps {
	isNewUser?: boolean;
}
const AccountHeader: FC<IAccountHeaderProps> = ({ isNewUser }) => {
	const [currentSignIn] = useRecoilState(signInState);
	const [currentSignUp] = useRecoilState(signUpState);

	const signUpHeaderText = () => {
		let htmlTag;

		switch (currentSignUp) {
			case SignUpValidates.PASSWORD:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5 text-primary'>
						비밀번호를 다시 확인해주세요.
					</div>
				);
				break;
			case SignUpValidates.PASSWORD_RULES:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5 text-primary'>
						비밀번호는 특수문자를 포함한 <br />
						8자리 이상이여야 합니다.
					</div>
				);
				break;
			case SignUpValidates.EXISTS:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5 text-primary'>같은 계정이 존재합니다.</div>
				);
				break;
			default:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5'>반갑습니다. 계정을 생성해주세요.</div>
				);
				break;
		}
		return htmlTag;
	};

	const signInHeaderText = () => {
		let htmlTag;

		switch (currentSignIn) {
			case SignInValidates.DEFAULT:
				htmlTag = <div className='text-center h5 fw-bold my-5'>안녕하세요. 케어링입니다.</div>;
				break;
			case SignInValidates.PASSWORD:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5 text-primary'>
						비밀번호가 일치하지 않습니다.
					</div>
				);
				break;
			case SignInValidates.NON_ACCOUNT:
				htmlTag = (
					<div className='text-center h5 fw-bold my-5 text-primary'>존재하지 않는 계정입니다.</div>
				);
				break;
		}
		return htmlTag;
	};

	return isNewUser ? <>{signUpHeaderText()}</> : <>{signInHeaderText()}</>;
};

export default AccountHeader;
