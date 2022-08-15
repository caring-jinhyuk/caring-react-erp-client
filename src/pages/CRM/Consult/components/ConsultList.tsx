import React, { useState } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import PaginationButtons from '../../../../components/PaginationButtons';
import useGetConsultList, {
	ConsultSearchConfig,
} from '../../../../quries/consult/useGetConsultList';
import { v1 } from 'uuid';
import ConsultTableRow from './ConsultTableRow';
import { Consult, Page_Consult_ } from '../../../../services/openApi';
import { useRecoilValue } from 'recoil';
import { consultState, ConsultStateTypes } from '../../../../atoms/consult';
import { UseQueryResult } from '@tanstack/react-query';
import Spinner from '../../../../components/bootstrap/Spinner';

const ConsultList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const { state, progress, search }: ConsultStateTypes = useRecoilValue(consultState);

	const searchConfig: ConsultSearchConfig = {
		state,
		progress,
		page: currentPage,
		size: perPage,
		search,
	};
	const { data, isFetching }: UseQueryResult<Page_Consult_> = useGetConsultList(searchConfig);

	const consultTableHeaders = ['상담유형', '최근상담', '연락처', '고객상태', '상담내용'];

	return (
		<Card shadow='sm'>
			<CardBody>
				{isFetching ? (
					<div className='w-100 d-flex justify-content-center align-items-center'>
						<Spinner size={100} color={'primary'} />
					</div>
				) : (
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								{consultTableHeaders.map((title) => (
									<th key={v1()} scope='col' className='text-center white-space-nowrap'>
										{title}
									</th>
								))}
							</tr>
						</thead>

						<tbody>
							{data?.content?.map((consult: Consult) => {
								return <ConsultTableRow key={v1()} consult={consult} />;
							})}
						</tbody>
					</table>
				)}
			</CardBody>
			<PaginationButtons
				data={[]}
				total={data?.totalPages}
				label='consult'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</Card>
	);
};

export default ConsultList;
