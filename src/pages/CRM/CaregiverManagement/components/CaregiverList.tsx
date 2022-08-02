import React, { FC } from 'react';
import { Caregiver } from '../../../../services/openApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { caregiverModal, selectCaregiver } from '../CaregiverContainer';
import { useGetCaregiverList } from '../../../../quries/useCaregiverList';
import { caregiverSearchParam } from '../CaregiverListHeader';

const CaregiverList: FC = () => {
	const setCaregiver = useSetRecoilState(selectCaregiver);
	const setOpen = useSetRecoilState(caregiverModal);
	const param = useRecoilValue(caregiverSearchParam);
	const caregivers = useGetCaregiverList(param.keyword, param.search);

	const openDetail = (item: Caregiver) => {
		setCaregiver(item);
		setOpen(true);
	};

	return (
		<>
			<table className='table table-modern table-hover'>
				<thead>
					<tr>
						<th>이름</th>
						<th>시/도</th>
						<th>시/군/구</th>
						<th>읍/면/동</th>
						<th>추가 희망지역</th>
						<th>번호</th>
					</tr>
				</thead>
				<tbody>
					{caregivers.data &&
						caregivers.data.map((item) => (
							// eslint-disable-next-line react/jsx-key
							<tr key={item.id} onClick={() => openDetail(item)}>
								<td>{item.name}</td>
								<td>{item.city}</td>
								<td>{item.ward}</td>
								<td>{item.town}</td>
								<td>{item.hopeArea}</td>
								<td>{item.phone}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default CaregiverList;
