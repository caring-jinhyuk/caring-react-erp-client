import React, { FC, useState } from 'react';
import { Notice } from '../../../../services/openApi';
import moment from 'moment';
import NoticeDetail from './NoticeDetail';

type NoticeTableRowProps = {
	notice: Notice;
};

const NoticeTableRow: FC<NoticeTableRowProps> = ({ notice }) => {
	const [isOpen, setOpen] = useState(false);

	const onClickHandler = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<tr onClick={onClickHandler}>
				<td className='text-center'>{notice.title}</td>
				<td className='text-center'>{moment(notice.createdAt).format('YYYY-MM-DD')}</td>
			</tr>
			<NoticeDetail isOpen={isOpen} setOpen={setOpen} notice={notice} />
		</>
	);
};

export default NoticeTableRow;
