import React, { FC } from 'react';
import { Smile } from '../../../../services/openApi';
import moment from 'moment'; //리액트 실시간 변경되는 시간

type SmileCallTableRowProps = {
	smile: Smile;
};

const SmileCallTableRow: FC<SmileCallTableRowProps> = ({ smile }) => {
	return (
		<tr>
			<td className='text-center'>{moment(smile.createdAt).format('YYYY-MM-DD HH:mm')}</td>
			<td className='text-center'>{smile.workNow}</td>
			<td className='text-center'>{smile.complete}</td>
			<td className='text-center'>{smile.choiceReason}</td>
			<td className='text-center'>{smile.advantages}</td>
			<td className='text-center'>{smile.disadvantages}</td>
			<td className='text-center'>{smile.writer}</td>
			<td className='text-center'>
				{smile.callDate ? moment(smile.callDate).format('YYYY-MM-DD HH:mm') : ''}
			</td>
		</tr>
	);
};

export default SmileCallTableRow;
