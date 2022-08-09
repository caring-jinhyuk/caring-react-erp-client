import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import USERS from '../../common/data/userDummyData';
import useDarkMode from '../../hooks/useDarkMode';
import Collapse from '../../components/bootstrap/Collapse';
import { NavigationLine } from '../Navigation/Navigation';
import Icon from '../../components/icon/Icon';
import useNavigationItemHandle from '../../hooks/useNavigationItemHandle';
import Popovers from '../../components/bootstrap/Popovers';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/user';

const User = () => {
	const userAtom = useRecoilValue(userState);

	const navigate = useNavigate();
	const handleItem = useNavigationItemHandle();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const [collapseStatus, setCollapseStatus] = useState<boolean>(false);

	const logout = () => {
		localStorage.removeItem('token');
		navigate('/auth-pages/sign-in');
	};

	return (
		<>
			{userAtom && (
				<div>
					<div
						className={classNames('user', { open: collapseStatus })}
						role='presentation'
						onClick={() => setCollapseStatus(!collapseStatus)}>
						<div className='user-avatar'>
							<img
								srcSet={USERS.JOHN.srcSet}
								src={USERS.JOHN.src}
								alt='Avatar'
								width={128}
								height={128}
							/>
						</div>
						<div className='user-info'>
							<div className='user-name'>
								<Popovers>{userAtom.name === undefined ? '' : userAtom.name.toString()}</Popovers>
								<code className='ps-2'></code>
							</div>
							<div className='user-sub-title'>
								<Popovers>{userAtom.email === undefined ? '' : userAtom.email.toString()}</Popovers>
								<code className='ps-2'></code>
							</div>
						</div>
					</div>

					<Collapse isOpen={collapseStatus} className='user-menu'>
						<nav aria-label='aside-bottom-user-menu'>
							<div className='navigation'>
								{/*<div*/}
								{/*	role='presentation'*/}
								{/*	className='navigation-item cursor-pointer'*/}
								{/*	onClick={() =>*/}
								{/*		navigate(*/}
								{/*			`/`,*/}
								{/*			// @ts-ignore*/}
								{/*			handleItem(),*/}
								{/*		)*/}
								{/*	}>*/}
								{/*	<span className='navigation-link navigation-link-pill'>*/}
								{/*		<span className='navigation-link-info'>*/}
								{/*			<Icon icon='AccountBox' className='navigation-icon' />*/}
								{/*			<span className='navigation-text'>{'menu:Profile'}</span>*/}
								{/*		</span>*/}
								{/*	</span>*/}
								{/*</div>*/}
								<div
									role='presentation'
									className='navigation-item cursor-pointer'
									onClick={() => {
										setDarkModeStatus(!darkModeStatus);
										handleItem();
									}}>
									<span className='navigation-link navigation-link-pill'>
										<span className='navigation-link-info'>
											<Icon
												icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
												color={darkModeStatus ? 'info' : 'warning'}
												className='navigation-icon'
											/>
											<span className='navigation-text'>
												{darkModeStatus ? '기본모드' : '다크모드'}
											</span>
										</span>
									</span>
								</div>
							</div>
						</nav>
						<NavigationLine />
						<nav aria-label='aside-bottom-user-menu-2'>
							<div className='navigation'>
								<div
									role='presentation'
									className='navigation-item cursor-pointer'
									onClick={logout}>
									<span className='navigation-link navigation-link-pill'>
										<span className='navigation-link-info'>
											<Icon icon='Logout' className='navigation-icon' />
											<span className='navigation-text'>로그아웃</span>
										</span>
									</span>
								</div>
							</div>
						</nav>
					</Collapse>
				</div>
			)}
		</>
	);
};

export default User;
