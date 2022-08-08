import React from 'react';
import CaregiverList from './components/CaregiverList';
import CaregiverListHeader from './CaregiverListHeader';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import CaregiverDetail from './components/CaregiverDetail';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Caregiver } from '../../../services/openApi';
import { offCanvasState } from '../../../atoms/offCanvas';
import NoticeDetail from '../../common/Home/components/NoticeDetail';
import { v1 } from 'uuid';

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
