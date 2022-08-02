import React, { FC } from 'react';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import { selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { v1 } from 'uuid';
// eslint-disable-next-line import/named
import { caregiverModal, selectCaregiver } from '../CaregiverContainer';
import { useGetCaregiverList } from '../../../../quries/useCaregiverList';
import { Interface } from 'readline';
import { caregiverSearchParam } from '../CaregiverListHeader';

type NoticeQueryParam = {
	keyword: string;
	search: string;
};

// const getCaregiverList = selector<Caregiver[]>({
// 	key: `${v1()}`,
// 	get: async ({ get }) => {
// 		const param = get(caregiverSearchParam);
// 		const response = await CaregiverControllerService.getCaregiverListUsingGet(
// 			param.keyword,
// 			0,
// 			param.search,
// 			10,
// 		);
// 		return response.content!;
// 	},
// });

type CaregiverListProps = {
	refresh?: number;
};

const CaregiverList: FC<CaregiverListProps> = ({ refresh }) => {
	const setCaregiver = useSetRecoilState(selectCaregiver);
	const setOpen = useSetRecoilState(caregiverModal);
	const param = useRecoilValue(caregiverSearchParam);
	const caregivers = useGetCaregiverList(param.keyword, param.search);
	//const caregivers = useGetCaregiverList(keyword, search);

	//const caregivers: Caregiver[] = useRecoilValue(getCaregiverList);
	//const caregivers = useGetCaregiverList(param.keyword, param.search);

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
