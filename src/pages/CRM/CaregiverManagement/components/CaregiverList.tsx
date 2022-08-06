import React, { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useGetCaregiverList } from '../../../../quries/useCaregiverList';
import { caregiverSearchParam } from '../CaregiverListHeader';
import PaginationButtons from '../../../../components/PaginationButtons';
import CaregiverTableRow from './CaregiverTableRow';

const CaregiverList: FC = () => {
	const param = useRecoilValue(caregiverSearchParam);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const caregivers = useGetCaregiverList(param.keyword, param.search, currentPage, perPage);

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
						caregivers.contents.content.map((caregiver) => (
							<CaregiverTableRow key={caregiver.id} caregiver={caregiver} />
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
