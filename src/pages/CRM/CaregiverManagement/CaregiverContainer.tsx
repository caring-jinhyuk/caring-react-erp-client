import React from 'react';
import CaregiverList from './components/CaregiverList';
import CaregiverListHeader from './CaregiverListHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import CaregiverDetail from './components/CaregiverDetail';
import { atom, useRecoilState } from 'recoil';
import { Caregiver } from '../../../services/openApi';

export const selectCaregiver = atom({
	key: 'selectCaregiver',
	default: {} as Caregiver,
});

export const caregiverModal = atom({
	key: 'caregiverModal',
	default: false,
});

const CaregiverContainer = () => {
	return (
		<>
			<Card>
				<CardBody>
					<CaregiverListHeader />
					<CaregiverList />
				</CardBody>
			</Card>
			<CaregiverDetail />
		</>
	);
};

export default CaregiverContainer;
