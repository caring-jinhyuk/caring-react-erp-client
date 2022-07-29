import React, { useCallback, useEffect, useState } from 'react';
import { Notice, NoticeControllerService, Page_Notice_ } from '../../../../services/openApi';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { useSetRecoilState } from 'recoil';
import { Progress, progressState } from '../../../../atoms/progress';
import NoticeTableRow from './NoticeTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';

const NoticeList = () => {
	const [noticeList, setNoticeList] = useState<Notice[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const setInProgerss = useSetRecoilState(progressState);

	const getNotice = useCallback(async () => {
		const notice: Page_Notice_ = await NoticeControllerService.getNoticeListUsingGet();

		setInProgerss(Progress.PROCEEDING);
		setNoticeList(notice.content ?? []);
		setInProgerss(Progress.DONE);
	}, [setInProgerss]);

	useEffect(() => {
		getNotice();
		console.log(1);
	}, [getNotice]);

	return (
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
						{noticeList.map((notice) => {
							return <NoticeTableRow key={v1()} notice={notice} />;
						})}
					</tbody>
				</table>
			</CardBody>
			<PaginationButtons
				data={[]}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={1}
				perPage={2}
				setPerPage={setPerPage}
			/>
		</Card>
	);
};

export default NoticeList;
