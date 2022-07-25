import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Account.scss';
import classNames from 'classnames';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, { CardBody } from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Logo from '../../components/Logo';
import useDarkMode from '../../hooks/useDarkMode';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

interface IAccountHeaderProps {
	isNewUser?: boolean;
	invalid?: boolean;
}
const AccountHeader: FC<IAccountHeaderProps> = ({ isNewUser, invalid }) => {
	if (isNewUser) {
		return (
			<>
				{invalid ? (
					<div className='text-center h5 fw-bold my-5 text-secondary'>
						비밀번호를 다시 확인해주세요.
					</div>
				) : (
					<div className='text-center h5 fw-bold my-5'>반갑습니다. 계정을 생성해주세요.</div>
				)}
			</>
		);
	}
	return (
		<>
			<div className='text-center h5 fw-bold my-5'>안녕하세요. 케어링입니다.</div>
		</>
	);
};

interface IAccountProps {
	isSignUp?: boolean;
}
const Account: FC<IAccountProps> = ({ isSignUp }) => {
	const { darkModeStatus } = useDarkMode();

	const [isNewUser, setIsNewUser] = useState<boolean | undefined>(isSignUp);
	const [invalid, setInvalid] = useState<boolean | undefined>(false);

	return (
		<PageWrapper title={isNewUser ? 'Sign Up' : 'Sign in'} className='bg-primary'>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-5 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='signIn-page'>
							<CardBody>
								<div className='text-center mb-4 align-items-center justify-content-center'>
									<Link
										to='/auth-pages/sign-in'
										className={classNames('text-decoration-none  fw-bold display-2', {
											'text-dark': !darkModeStatus,
											'text-light': darkModeStatus,
										})}>
										<Logo width={60} height={30} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-lo10-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'secondary'}
												className={classNames('rounded-1', 'w-100', {
													'btn-no-focus': !!isNewUser,
												})}
												size='lg'
												onClick={() => {
													setIsNewUser(!isNewUser);
												}}>
												로그인
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'secondary'}
												isLight={!isNewUser}
												className={classNames('rounded-1', 'w-100', {
													'btn-no-focus': !isNewUser,
												})}
												size='lg'
												onClick={() => {
													setIsNewUser(!isNewUser);
												}}>
												가입하기
											</Button>
										</div>
									</div>
								</div>

								<AccountHeader isNewUser={isNewUser} invalid={invalid} />

								{isNewUser ? <SignUpForm setInvalid={setInvalid.bind(this)} /> : <SignInForm />}
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Account.propTypes = {
	isSignUp: PropTypes.bool,
};
Account.defaultProps = {
	isSignUp: false,
};

export default Account;
