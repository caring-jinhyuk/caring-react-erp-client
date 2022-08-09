import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import Button from '../../../components/bootstrap/Button';

const DefaultHeader = () => {
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
		</Header>
	);
};

export default DefaultHeader;
