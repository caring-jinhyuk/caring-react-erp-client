import React, { FC, useState } from 'react';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../../components/bootstrap/OffCanvas';
import { Smile, SmileControllerService } from '../../../../services/openApi';
import { useFormik } from 'formik';
import showNotification from '../../../../components/extras/showNotification';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../../../../components/bootstrap/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../../components/bootstrap/Modal';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { Calendar as DatePicker } from 'react-date-range';

import {
	arrToOption,
	selectAdvantagesList,
	selectCompleteItem,
	selectDisadvantagesList,
	selectOXItem,
	selectResignationReasonList,
	selectSmileWhyList,
	selectWorkNowItem,
} from '../Statistics/SmileCallStatistics';
import Select from '../../../../components/bootstrap/forms/Select';
import MonthPicker from '../../../../components/MonthPicker';

//오픈 설정은 해당 화면을 부르는 상위에서 관리하는 것이 좋아보인다.
type SmileCallAddProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMode: 'C' | 'R' | 'U' | 'D';
	smile: Smile;
};

const validator = (smile: Smile) => {
	let error = {
		code: '',
		msgStr: '',
	};

	if (!smile.id) {
		error.msgStr = 'id 정보가 없습니다.';
	}
	return error;
};

const SmileCallDetail: FC<SmileCallAddProps> = ({ isOpen, setOpen, isMode, smile }) => {
	console.log('SmileCallDetail open');
	//저장할 스마일콜 서버정보 상태
	const queryClient = useQueryClient(); //서버 상태 관리를 수행 ( 마스터의 키값으로 디테일 조회 ) - 상세조회, 저장, 수정, 삭제
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: smile,
		// eslint-disable-next-line no-unused-vars
		// 값 변경시마다 validation 체크
		//validateOnChange: true,
		// 인풋창 블러시에 validation 체크
		//validateOnBlur: true,
		// validation 체크할 함수
		//validate: validator,
		onSubmit: async (values) => {
			//alert(JSON.stringify(values, null, 2));
			await saveSmileCall(values);
		},
	});

	//저장하기
	const saveSmileCall = async (value: Smile) => {
		try {
			//저장 트랜잭션 호출
			const response = await SmileControllerService.saveSmileUsingPost(value);
			showNotification('등록 성공', '수급자 ' + value.takeName + ' 님의 정보가 등록되었습니다.');
			setOpen(false); //저장이후 종료하면서 오픈상태 초기화
			//저장 이후 재조회
			await queryClient.invalidateQueries(['caregiverList', { keyword: '', search: '' }]);
		} catch (e) {}
	};

	return (
		<>
			<Modal id='example-modal' setIsOpen={setOpen} titleId='example-title' isOpen={isOpen}>
				<ModalHeader>
					<ModalTitle id='example-title'>Title</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<FormGroup id='writer' className='mb-3' isFloating={true} label='담당자'>
						<Input type='text' value={formik.values.writer} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='endDate' className='mb-3' isFloating={true} label='종료날짜'>
						<Input type='text' value={formik.values.endDate} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='phone' className='mb-3' isFloating={true} label='번호'>
						<Input type='text' value={formik.values.phone} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='workNow' className='mb-3' isFloating={true} label='현재상황'>
						<Select
							className='col-12 mb-3'
							ariaLabel='현재상황'
							list={selectWorkNowItem}
							value={formik.values.workNow}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='resignation_reason' className='mb-3' isFloating={true} label='퇴사사유'>
						<Select
							className='col-12 mb-3'
							ariaLabel='퇴사사유'
							list={arrToOption(selectResignationReasonList)}
							value={formik.values.resignationReason}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup
						id='resignation_reason_etc'
						className='mb-3'
						isFloating={true}
						label='퇴사사유-기타'>
						<Input
							type='text'
							value={formik.values.resignationReason}
							onChange={formik.handleChange}
						/>
					</FormGroup>
					<FormGroup id='choice_reason' className='mb-3' isFloating={true} label='선호이유'>
						<Select
							className='col-12 mb-3'
							ariaLabel='선호이유'
							list={arrToOption(selectSmileWhyList)}
							value={formik.values.choiceReason}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup
						id='resignationReasonCoincide'
						className='mb-3'
						isFloating={true}
						label='퇴사사유 일치 여부'>
						<Select
							className='col-12 mb-3'
							ariaLabel='선호이유'
							list={selectOXItem}
							value={formik.values.resignationReasonCoincide}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='returnPossibility' className='mb-3' isFloating={true} label='리턴가능성'>
						<Select
							className='col-12 mb-3'
							ariaLabel='리턴가능성'
							list={selectOXItem}
							value={formik.values.returnPossibility}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='complete' className='mb-3' isFloating={true} label='진행여부'>
						<Select
							className='col-12 mb-3'
							ariaLabel='진행여부'
							list={selectCompleteItem}
							value={formik.values.complete}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='reaction' className='mb-3' isFloating={true} label='긍정/부정'>
						<Select
							className='col-12 mb-3'
							ariaLabel='진행여부'
							list={selectCompleteItem}
							value={formik.values.complete}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='caring_advantages_list' className='mb-3' isFloating={true} label='좋은점'>
						<Select
							className='col-12 mb-3'
							ariaLabel='좋은점'
							list={arrToOption(selectAdvantagesList)}
							value={formik.values.advantages}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup
						id='caring_advantages_choice_string'
						className='mb-3'
						isFloating={true}
						label='불편한 점'>
						<Select
							className='col-12 mb-3'
							ariaLabel='불편한 점'
							list={arrToOption(selectDisadvantagesList)}
							value={formik.values.disadvantages}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup
						id='caring_disadvantages_choice_string'
						className='mb-3'
						isFloating={true}
						label='특이사항'>
						<Input type='text' value={formik.values.significant} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='giveName' className='mb-3' isFloating={true} label='보호자'>
						<Input type='text' value={formik.values.giveName} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='takeName' className='mb-3' isFloating={true} label='수급자'>
						<Input type='text' value={formik.values.takeName} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='createdAt' className='mb-3' isFloating={true} label='배정날짜'>
						<Input
							type='text'
							value={formik.values.createdAt}
							format='yyyy-MM-dd HH:mm'
							onChange={formik.handleChange}
						/>
					</FormGroup>
					<FormGroup id='callDate' className='mb-3' isFloating={true} label='완료날짜'>
						<Input
							type='text'
							value={formik.values.callDate}
							format='yyyy-MM-dd HH:mm'
							onChange={formik.handleChange}
						/>
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button color='info' onClick={() => setOpen(false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};
export default SmileCallDetail;
