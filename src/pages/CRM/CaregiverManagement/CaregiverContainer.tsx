import React from 'react';
import CaregiverList from './components/CaregiverList';
import CaregiverListHeader, { caregiverSearchParam } from './CaregiverListHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import CaregiverDetail from './components/CaregiverDetail';
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { Caregiver, CaregiverControllerService } from '../../../services/openApi';
import { v1 } from 'uuid';
import { useGetCaregiverList } from '../../../quries/useCaregiverList';

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
