import React from 'react';
import CaregiverList from './components/CaregiverList';
import CaregiverListHeader from './CaregiverListHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';

const CaregiverContainer = () => {
	return (
		<>
			<Card>
				<CardBody>
					<CaregiverListHeader />
					<CaregiverList />
				</CardBody>
			</Card>
		</>
	);
};

export default CaregiverContainer;
