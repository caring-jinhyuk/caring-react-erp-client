import React, { useState } from 'react';
import { NoticeControllerService, Page_Notice_ } from '../../../../services/openApi';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { selectorFamily, useRecoilValue } from 'recoil';
import NoticeTableRow from './NoticeTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';

export const noticesState = selectorFamily({
	key: 'notices',
	get:
		({ currentPage, perPage }: any) =>
		async () => {
			const notices: Page_Notice_ = await NoticeControllerService.getNoticeListUsingGet(
				false,
				currentPage - 1,
				perPage,
			);
			return notices;
		},
});

const Notices = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { content, totalElements } = useRecoilValue(noticesState({ currentPage, perPage }));

	return (
		<>
			<Card stretch>
				<CardHeader borderSize={1}>
					<CardLabel icon='Info' iconColor='secondary'>
						<CardTitle>공지사항</CardTitle>
					</CardLabel>
				</CardHeader>
				<CardBody className='table-responsive' isScrollable>
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								<th scope='col' className='w-75 text-center'>
									제목
								</th>
								<th scope='col' className='text-center'>
									날짜
								</th>
							</tr>
						</thead>
						<tbody>
							{content?.map((notice) => {
								return <NoticeTableRow key={v1()} notice={notice} />;
							})}
						</tbody>
					</table>
				</CardBody>
				<PaginationButtons
					data={new Array(totalElements)}
					label='notice'
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					perPage={perPage}
					setPerPage={setPerPage}
				/>
			</Card>
		</>
	);
};

export default Notices;
