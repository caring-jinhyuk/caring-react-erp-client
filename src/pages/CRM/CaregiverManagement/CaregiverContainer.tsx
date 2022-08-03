import React from 'react';
import CaregiverList from './components/CaregiverList';
import CaregiverListHeader, { caregiverSearchParam } from './CaregiverListHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import CaregiverDetail from './components/CaregiverDetail';
import { atom, selector, useRecoilValue } from 'recoil';
import { Caregiver, CaregiverControllerService } from '../../../services/openApi';
import { v1 } from 'uuid';

export const selectCaregiver = atom({
	key: 'selectCaregiver',
	default: {} as Caregiver,
});

export const caregiverModal = atom({
	key: 'caregiverModal',
	default: false,
});

export const getCaregiverList = selector<Caregiver[]>({
	key: `${v1()}`,
	get: async ({ get }) => {
		const param = get(caregiverSearchParam);
		const response = await CaregiverControllerService.getCaregiverListUsingGet(
			param.keyword,
			0,
			param.search,
			10,
		);
		return response.content!;
	},
});

const CaregiverContainer = () => {
	const caregiverModel = useRecoilValue(caregiverModal);

	return (
		<>
			<Card>
				<CardBody>
					<CaregiverListHeader />
					<CaregiverList />
				</CardBody>
			</Card>
			{caregiverModel && <CaregiverDetail />}
		</>
	);
};

export default CaregiverContainer;
