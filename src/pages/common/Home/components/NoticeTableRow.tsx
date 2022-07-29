import React, { FC } from 'react';
import { Notice } from '../../../../services/openApi';
import moment from 'moment';

type NoticeTableRowProps = {
	notice: Notice;
};

const NoticeTableRow: FC<NoticeTableRowProps> = ({ notice }) => {
	console.log(notice);
	return (
		<tr>
			<td className='text-center'>{notice.title}</td>
			<td className='text-center'>{moment(notice.createdAt).format('YYYY-MM-DD')}</td>
		</tr>
	);
};

export default NoticeTableRow;
