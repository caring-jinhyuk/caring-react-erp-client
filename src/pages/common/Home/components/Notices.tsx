import React from 'react';
import { Notice, NoticeControllerService, Page_Notice_ } from '../../../../services/openApi';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { selector, useRecoilValue, useSetRecoilState } from 'recoil';
import NoticeTableRow from './NoticeTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';

export const NoticesState = selector<Notice[]>({
	key: 'notices',
	get: async () => {
		const notices: Page_Notice_ = await NoticeControllerService.getNoticeListUsingGet();
		return notices.content ?? [];
	},
});

const Notices = () => {
	const notices = useRecoilValue(NoticesState);

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
							{notices.map((notice) => {
								return <NoticeTableRow key={v1()} notice={notice} />;
							})}
						</tbody>
					</table>
				</CardBody>
				{/*<PaginationButtons*/}
				{/*	data={[]}*/}
				{/*	label='items'*/}
				{/*	setCurrentPage={setCurrentPage}*/}
				{/*	currentPage={1}*/}
				{/*	perPage={2}*/}
				{/*	setPerPage={setPerPage}*/}
				{/*/>*/}
			</Card>
		</>
	);
};

export default Notices;
