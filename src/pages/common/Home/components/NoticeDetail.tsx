import React, { FC, useRef, useState } from 'react';
import {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../../components/bootstrap/OffCanvas';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';

import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Notice, NoticeControllerService } from '../../../../services/openApi';
import { offCanvasState } from '../../../../atoms/offCanvas';
import { TextEditor } from '../../../../components/TextEditor';

export interface NoticeDetailProps {
	notice?: Notice;
	isNew?: boolean;
}

const NoticeDetail: FC<NoticeDetailProps> = ({ notice, isNew }) => {
	const [isModify, setIsModify] = useState(false);
	const [currentNotice, setNotice] = useState(notice ?? { title: '', body: '' });
	const setOffCanvas = useSetRecoilState(offCanvasState);
	const editorRef: React.Ref<any> = useRef();

	const queryClient = useQueryClient();
	const saveNotice = useMutation(
		['saveNotice'],
		(newNotice: Notice) => {
			return NoticeControllerService.saveNoticeUsingPost(newNotice);
		},
		{
			onSuccess: async (newNotice) => {
				queryClient.setQueryData(['notice', 'detail', newNotice.id], newNotice);
				await queryClient.invalidateQueries(['notice', 'list']);
			},
		},
	);

	const handleOnClick = async () => {
		if (isNew || isModify) {
			saveNotice.mutate(currentNotice);
			setIsModify(!isModify);
		}
		setIsModify(!isModify);
	};

	const handleOnBodyChange = () => {
		const newBody = editorRef.current.getInstance().getHTML();
		setNotice({ ...currentNotice, body: newBody });
	};

	const handleOnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNotice({ ...currentNotice, title: e.target.value });
	};

	const stringToHtml = () => {
		return <div dangerouslySetInnerHTML={{ __html: currentNotice.body ?? '' }}></div>;
	};

	return (
		<>
			<OffCanvasHeader className='d-flex, justify-content-end'>
				<OffCanvasTitle id={'notice_title'}>
					<Button onClick={handleOnClick} color='primary' type='button'>
						{isModify || isNew ? '저장하기' : '수정하기'}
					</Button>
					<Button
						onClick={() => setOffCanvas({ isOpen: false })}
						className='btn-unset'
						size='lg'
						color='dark'
						icon='close'
						isLink
					/>
				</OffCanvasTitle>
			</OffCanvasHeader>
			<OffCanvasBody className='pt-0'>
				<Card stretch={true}>
					{isNew || isModify ? (
						<CardHeader className='pb-0'>
							<FormGroup isFloating={true} label='제목' className='w-100'>
								<Input
									id='title'
									type='text'
									value={currentNotice.title}
									onChange={handleOnTitleChange}
									className='input-focus'
									required={true}
								/>
							</FormGroup>
						</CardHeader>
					) : (
						<></>
					)}
					<CardBody isScrollable={true} className='scroll-auto'>
						{isModify || isNew ? (
							<TextEditor
								editorRef={editorRef}
								value={currentNotice.body === '' ? ' ' : currentNotice.body}
								onChange={handleOnBodyChange}></TextEditor>
						) : (
							stringToHtml()
						)}
					</CardBody>
				</Card>
			</OffCanvasBody>
		</>
	);
};

export default NoticeDetail;
