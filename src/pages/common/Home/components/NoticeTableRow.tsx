import React, { FC, useCallback, useState } from 'react';
import { Notice } from '../../../../services/openApi';
import moment from 'moment';
import NoticeDetail from './NoticeDetail';
import { useRecoilState } from 'recoil';
import { offCanvasState } from '../../../../atoms/offCanvas';
import { v1 } from 'uuid';

type NoticeTableRowProps = {
	notice: Notice;
};

const NoticeTableRow: FC<NoticeTableRowProps> = ({ notice }) => {
	const [offCanvas, setOffCanvas] = useRecoilState(offCanvasState);

	const onClickHandler = () => {
		console.log(1);
		let offCanvasElement = <NoticeDetail key={v1()} notice={notice} />;

		if (offCanvas.isOpen) {
			setOffCanvas({ ...offCanvas, children: offCanvasElement });
			return;
		}
		setOffCanvas({ isOpen: true, children: offCanvasElement });
	};

	return (
		<>
			<tr onClick={onClickHandler}>
				<td className='text-center'>{notice.title}</td>
				<td className='text-center'>{moment(notice.createdAt).format('YYYY-MM-DD')}</td>
			</tr>
		</>
	);
};

export default NoticeTableRow;
