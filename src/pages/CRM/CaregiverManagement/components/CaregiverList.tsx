import React, { FC, useState } from 'react';
import { Caregiver } from '../../../../services/openApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { caregiverModal, selectCaregiver } from '../CaregiverContainer';
import { useGetCaregiverList } from '../../../../quries/useCaregiverList';
import { caregiverSearchParam } from '../CaregiverListHeader';
import PaginationButtons from '../../../../components/PaginationButtons';

const CaregiverList: FC = () => {
	const setCaregiver = useSetRecoilState(selectCaregiver);
	const setOpen = useSetRecoilState(caregiverModal);
	const param = useRecoilValue(caregiverSearchParam);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const caregivers = useGetCaregiverList(param.keyword, param.search, currentPage, perPage);

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
					{caregivers.contents?.content &&
						caregivers.contents.content.map((item) => (
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
			<PaginationButtons
				data={new Array(caregivers.contents?.totalElements)}
				label='구직 요양보호사'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</>
	);
};

export default CaregiverList;
