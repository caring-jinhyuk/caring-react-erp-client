import React, { FC, useState } from 'react';
import { Smile } from '../../../../services/openApi';
import moment from 'moment';
import NoticeDetail from '../../../common/Home/components/NoticeDetail';
import SmileCallDetail from './SmileCallDetail'; //리액트 실시간 변경되는 시간

type SmileCallTableRowProps = {
	smile: Smile;
};

const SmileCallTableRow: FC<SmileCallTableRowProps> = ({ smile }) => {
	const [isOpen, setOpen] = useState(false);

	const onClickHandler = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<tr onClick={onClickHandler}>
				<td className='text-center'>{moment(smile.createdAt).format('YYYY-MM-DD HH:mm')}</td>
				<td className='text-center'>{smile.workNow}</td>
				<td className='text-center'>{smile.complete}</td>
				<td className='text-center'>{smile.choiceReason}</td>
				<td className='text-center'>{smile.advantages}</td>
				<td className=''>{smile.disadvantages}</td>
				<td className='text-center'>{smile.writer}</td>
				<td className='text-center'>
					{smile.callDate ? moment(smile.callDate).format('YYYY-MM-DD HH:mm') : ''}
				</td>
				{isOpen && <SmileCallDetail isOpen={isOpen} setOpen={setOpen} isMode={'U'} smile={smile} />}
			</tr>
		</>
	);
};

export default SmileCallTableRow;
