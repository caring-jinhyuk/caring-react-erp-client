import React, { FC, useState } from 'react';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../components/bootstrap/OffCanvas';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

import TextEditor from '../../../../components/TextEditor';

type NoticeDetailProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	noticeBody: string | undefined;
};

const NoticeDetail: FC<NoticeDetailProps> = ({ isOpen, setOpen, noticeBody }) => {
	const [noticeValue, setNoticeValue] = useState(noticeBody);
	const [isModify, setIsModify] = useState(false);

	const stringToHtml = () => {
		return <div dangerouslySetInnerHTML={{ __html: noticeValue ?? '' }}></div>;
	};

	const modifyHandler = () => {};

	const saveNotice = {};

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
							<TextEditor value={noticeValue} onChange={setNoticeValue} />
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
