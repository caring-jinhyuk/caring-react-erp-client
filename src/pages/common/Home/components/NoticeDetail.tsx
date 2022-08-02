import React, { FC, useState } from 'react';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../components/bootstrap/OffCanvas';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

import TextEditor from '../../../../components/TextEditor';
import { Notice, NoticeControllerService } from '../../../../services/openApi';
import { useRecoilRefresher_UNSTABLE, useResetRecoilState } from 'recoil';
import { noticesState } from './Notices';

type NoticeDetailProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	notice: Notice;
};

const NoticeDetail: FC<NoticeDetailProps> = ({ isOpen, setOpen, notice }) => {
	const [currentNotice, setNotice] = useState(notice);
	const [isModify, setIsModify] = useState(false);
	const refreshNotices = useRecoilRefresher_UNSTABLE(noticesState);

	const stringToHtml = () => {
		return <div dangerouslySetInnerHTML={{ __html: currentNotice.body ?? '' }}></div>;
	};

	const modifyHandler = async (e: any) => {
		setIsModify(!isModify);
		if (isModify) {
			await saveNotice();
		}
	};

	const saveNotice = async () => {
		await NoticeControllerService.saveNoticeUsingPost(currentNotice);
		await refreshNotices();
	};

	const setNoticeBody = (newValue: any) => {
		const newNotice = { ...currentNotice, body: newValue };
		setNotice(newNotice);
	};

	return (
		<OffCanvas isOpen={isOpen} setOpen={setOpen} isBackdrop={false}>
			<OffCanvasHeader className='d-flex, justify-content-end'>
				<OffCanvasTitle id={'aa'}>
					<Button onClick={modifyHandler} color='primary' type='button'>
						{isModify ? '저장하기' : '수정하기'}
					</Button>
					<Button
						onClick={() => setOpen(false)}
						className='btn-unset'
						size='lg'
						color='primary'
						icon='close'
						isLink
					/>
				</OffCanvasTitle>
			</OffCanvasHeader>
			<OffCanvasBody className='pt-0'>
				<Card stretch={true}>
					<CardBody isScrollable={true} className='scroll-auto'>
						{isModify ? (
							<TextEditor value={currentNotice.body} onChange={setNoticeBody} />
						) : (
							stringToHtml()
						)}
					</CardBody>
				</Card>
			</OffCanvasBody>
		</OffCanvas>
	);
};

export default NoticeDetail;
