import React, { useState } from 'react';

import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import PaginationButtons from '../../../../components/PaginationButtons';
import Button from '../../../../components/bootstrap/Button';
import NoticeTableRow from './NoticeTableRow';
import NoticeDetail from './NoticeDetail';
import { offCanvasState } from '../../../../atoms/offCanvas';
import { useSetRecoilState } from 'recoil';
import { useGetNotices } from '../../../../quries/home/useGetNotices';
import { v1 } from 'uuid';

const Notices = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { content, totalElements } = useGetNotices(currentPage, perPage);
	const setOffCanvas = useSetRecoilState(offCanvasState);

	const onClickHandler = () => {
		const detailElement = <NoticeDetail isNew={true} />;
		setOffCanvas({ isOpen: true, children: detailElement });
	};

	return (
		<>
			<Card stretch>
				<CardHeader borderSize={1} className='d-flex flex-row align-items-center'>
					<CardLabel
						className='d-flex justify-content-center align-items-center'
						icon='Info'
						iconColor='secondary'>
						<CardTitle>공지사항</CardTitle>
					</CardLabel>
					<Button icon={'PencilSquare'} color={'primary'} isOutline onClick={onClickHandler}>
						등록하기
					</Button>
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
