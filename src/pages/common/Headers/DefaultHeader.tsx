import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atoms/user';

const DefaultHeader = () => {
	const userAtom = useRecoilValue(userState);
	const location = useLocation();
	const name = location.pathname.split('/').pop();

	return (
		<Header>
			<HeaderLeft>
				{name === '' ? (
					<Button icon='home' size='lg'>
						Home
					</Button>
				) : (
					<Breadcrumb list={[{ title: name ?? '', to: location.pathname }]} />
				)}
			</HeaderLeft>
			<HeaderRight>
				<h5>{userAtom.name}</h5>
				<Button icon={'Logout'} color='primary'>
					로그아웃
				</Button>
			</HeaderRight>
		</Header>
	);
};

export default DefaultHeader;
