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
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';

import { Calendar as DatePicker } from 'react-date-range';
import Option from '../../../../components/bootstrap/Option';

import {
	arrToOption,
	innerItemAdvantageList,
	innerItemCompleteList,
	innerItemDisadvantageList,
	innerItemOXList,
	innerItemReactionList,
	innerItemResignationReasonList,
	innerItemSmileWhyList,
	innerItemWorkNowList,
} from '../statics/SmileCallStatics';
import Select from '../../../../components/bootstrap/forms/Select';
import MonthPicker from '../../../../components/MonthPicker';
import { SmileCallDetailForm, smileCallDetailInfo } from '../SmileCallContainer';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import collection from '../../../../components/icon/bootstrap/Collection';
import { number, object } from 'prop-types';
import { caregiverSearchParam } from '../../CaregiverManagement/CaregiverListHeader';
import { smileCallSearchState } from '../../../../atoms/smileCall';

//오픈 설정은 해당 화면을 부르는 상위에서 관리하는 것이 좋아보인다.
type SmileCallAddProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	modalType: 'C' | 'R' | 'U' | 'D';
	smile: Smile;
	title?: string;
};

const validator = (smile: Smile) => {
	let error = {
		code: '',
		msgStr: '',
	};

	//필수값 체크
	if (!smile.writer) {
		error.msgStr = 'id 정보가 없습니다.';
	}
	//이메일 번호 체크
	const regEmail =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	//핸드폰 번호 체크
	const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
	if (smile.phone && regPhone.test(smile.phone) === false) {
		error.msgStr = '유효한 핸드폰 번호가 아닙니다.';
	}

	return error;
};

const SmileCallDetail: FC<SmileCallAddProps> = ({ isOpen, setOpen, modalType, smile, title }) => {
	const [searchParam, setSearchParam] = useRecoilState(smileCallSearchState);

	let formSmileCall: SmileCallDetailForm = {
		advantages: smile.advantages ? smile.advantages : '',
		callDate: smile.callDate ? smile.callDate : '',
		choiceReason: smile.choiceReason ? smile.choiceReason : '',
		complete: smile.complete ? smile.complete : '',
		createdAt: smile.createdAt ? smile.createdAt : '',
		disadvantages: smile.disadvantages ? smile.disadvantages : '',
		endDate: smile.endDate ? smile.endDate : '',
		giveName: smile.giveName ? smile.giveName : '',
		id: smile.id ? smile.id : undefined,
		phone: smile.phone ? smile.phone : '',
		reaction: smile.reaction ? smile.reaction : 2,
		resignationReason: smile.resignationReason ? smile.resignationReason : '',
		resignationReasonCoincide: smile.resignationReasonCoincide
			? smile.resignationReasonCoincide
			: '',
		returnPossibility: smile.returnPossibility ? smile.returnPossibility : '',
		significant: smile.significant ? smile.significant : '',
		takeName: smile.takeName ? smile.takeName : '',
		workNow: smile.workNow ? smile.workNow : '',
		writer: smile.writer ? smile.writer : '',

		/*스마일콜 추가 부분 상속*/
		choiceReasonEtc: smile.choiceReason === '기타' ? smile.choiceReason : '', //선호이유가 기타일경우 상세내용이 기타 값이 된다.
		resignationReasonEtc: smile.resignationReason === '기타' ? smile.resignationReason : '', //상세값에 있으면 처리를 하는 로직이 있을수 있다.
		advantagesEtc: smile.advantages === '기타' ? smile.advantages : '', //상세값에 있으면 처리를 하는 로직이 있을수 있다.
		disadvantagesEtc: smile.disadvantages === '기타' ? smile.disadvantages : '',
	};
	//저장할 스마일콜 서버정보 상태
	const queryClient = useQueryClient(); //서버 상태 관리를 수행 ( 마스터의 키값으로 디테일 조회 ) - 상세조회, 저장, 수정, 삭제

	//useFormik은 다양한 인풋을 받을때 상태를 효과적으로 관리하기 위한 라이브러리
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: formSmileCall,

		// eslint-disable-next-line no-unused-vars
		//validateOnChange: true, // 값 변경시마다 validation 체크
		//validateOnBlur: true, // 인풋창 블러시에 validation 체크

		//validate: validator, // validation 체크할 함수
		onSubmit: async (values) => {
			await saveSmileCall(values);
		},
	});

	//저장하기
	const saveSmileCall = async (values: SmileCallDetailForm) => {
		try {
			const item: SmileCallDetailForm = {
				advantages:
					values.advantages == '기타'
						? (values.advantages = values.advantagesEtc)
						: values.advantages,
				callDate: values.complete == '완료' ? (values.callDate = new Date().toISOString()) : '', //서버에서 처리해야하지 않을까?
				choiceReason:
					values.choiceReason == '기타'
						? (values.choiceReason = values.choiceReasonEtc)
						: values.choiceReason,
				complete: values.complete,
				createdAt: values.createdAt,
				disadvantages:
					values.disadvantages == '기타'
						? (values.disadvantages = values.disadvantagesEtc)
						: values.disadvantages,
				endDate: values.endDate,
				giveName: values.giveName,
				id: values.id,
				phone: values.phone,
				reaction: values.reaction,
				resignationReason:
					values.resignationReason == '기타'
						? (values.resignationReason = values.resignationReasonEtc)
						: values.resignationReason,
				resignationReasonCoincide: values.resignationReasonCoincide,
				returnPossibility: values.returnPossibility,
				significant: values.significant,
				takeName: values.takeName,
				workNow: values.workNow,
				writer: values.writer,
				//스마일콜 상속이후 부분 디테일
				choiceReasonEtc: values.choiceReasonEtc, //선호이유가 기타일경우 상세내용이 기타 값이 된다.
				resignationReasonEtc: values.resignationReasonEtc, //상세값에 있으면 처리를 하는 로직이 있을수 있다.
				advantagesEtc: values.advantagesEtc,
				disadvantagesEtc: values.disadvantagesEtc,
			};

			//일단 멀티셀렉트는 추후
			//this.smile.advantages = this.caring_advantages_list_string(this.caring_advantages_list, this.advantages_list, this.caring_advantages_choice, this.caring_advantages_choice_string);
			//this.smile.disadvantages = this.caring_advantages_list_string(this.caring_disadvantages_list, this.disadvantages_list, this.caring_disadvantages_choice, this.caring_disadvantages_choice_string);
			//저장 트랜잭션 호출
			await SmileControllerService.saveSmileUsingPost(item);
			showNotification('등록 성공', '수급자 ' + item.takeName + ' 님의 정보가 등록되었습니다.');
			setOpen(false); //저장이후 종료하면서 오픈상태 초기화
			//저장 이후 재조회 - 상위에서 재조회 해야하는데....?
			await queryClient.invalidateQueries(['smileCallList']);
			setSearchParam({ ...searchParam });
		} catch (e) {}
	};

	const deleteSmileCall = async (id: number | undefined) => {
		if (!id) return;
		SmileControllerService.deleteSmileUsingDelete(id!)
			.then((value) => {
				setOpen(false); //삭제이후 종료하면서 오픈상태 초기화
				setSearchParam({ ...searchParam }); //재조회
			})
			.catch((error) => {
				showNotification('삭제 실패', '');
			});
	};

	const getSmileCallCount = async (managerName: string | undefined) => {
		if (!managerName) return;
		SmileControllerService.getSmileCallCountUsingGet(managerName)
			.then((value) => {})
			.catch((error) => {
				showNotification('조회 실패', '');
			});
	};

	const getSmileAllList = async () => {
		SmileControllerService.getSmileAllListUsingGet()
			.then((value) => {})
			.catch((error) => {
				showNotification('조회 실패', '');
			});
	};

	return (
		<>
			<Modal id='example-modal' setIsOpen={setOpen} titleId='example-title' isOpen={isOpen}>
				<ModalHeader>
					<ModalTitle id='example-title'>{title}</ModalTitle>
					<div>
						{modalType === 'C' && (
							<Button
								color='secondary'
								onClick={() => {
									formik.resetForm();
								}}>
								초기화
							</Button>
						)}
						<Button color='info' onClick={() => setOpen(false)}>
							닫기
						</Button>
					</div>
				</ModalHeader>
				<ModalBody>
					<FormGroup id='writer' className='mb-3' isFloating={true} label='담당자'>
						<Input type='text' value={formik.values.writer} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='endDate' className='mb-3' isFloating={true} label='종료날짜'>
						<Input type='text' value={formik.values.endDate} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='phone' className='mb-3' isFloating={true} label='번호'>
						<Input
							type='text'
							value={formik.values.phone}
							placeholder={'-없이 번호만'}
							onChange={formik.handleChange}
						/>
					</FormGroup>
					<FormGroup id='workNow' className='mb-3' isFloating={true} label='현재상황'>
						<Select
							className='col-12 mb-3'
							ariaLabel='현재상황'
							list={innerItemWorkNowList}
							value={formik.values.workNow}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					{formik.values.workNow === '퇴사' ? (
						<FormGroup id='resignationReason' className='mb-3' isFloating={true} label='퇴사사유'>
							<Select
								className='col-12 mb-3'
								ariaLabel='퇴사사유'
								list={innerItemResignationReasonList}
								value={formik.values.resignationReason}
								onChange={formik.handleChange}></Select>
						</FormGroup>
					) : (
						''
					)}
					{formik.values.resignationReason === '기타' ? (
						<FormGroup
							id='resignationReasonEtc'
							className='mb-3'
							isFloating={true}
							label='퇴사사유-기타'>
							<Input
								type='text'
								value={formik.values.resignationReasonEtc}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					) : (
						''
					)}
					<FormGroup id='choiceReason' className='mb-3' isFloating={true} label='선호이유'>
						<Select
							className='col-12 mb-3'
							ariaLabel='선호이유'
							list={innerItemSmileWhyList}
							value={formik.values.choiceReason}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					{formik.values.choiceReason === '기타' ? (
						<FormGroup
							id='choiceReasonEtc'
							className='mb-3'
							isFloating={true}
							label='선호이유-기타'>
							<Input
								type='text'
								value={formik.values.choiceReasonEtc}
								onChange={formik.handleChange}
							/>
						</FormGroup>
					) : (
						''
					)}
					{formik.values.workNow === '퇴사' ? (
						<FormGroup
							id='resignationReasonCoincide'
							className='mb-3'
							isFloating={true}
							label='퇴사사유 일치 여부'>
							<Select
								className='col-12 mb-3'
								ariaLabel='퇴사사유 일치 여부'
								list={innerItemOXList}
								value={formik.values.resignationReasonCoincide}
								onChange={formik.handleChange}></Select>
						</FormGroup>
					) : (
						''
					)}
					{formik.values.workNow === '퇴사' ? (
						<FormGroup id='returnPossibility' className='mb-3' isFloating={true} label='리턴가능성'>
							<Select
								className='col-12 mb-3'
								ariaLabel='리턴가능성'
								list={innerItemOXList}
								value={formik.values.returnPossibility}
								onChange={formik.handleChange}></Select>
						</FormGroup>
					) : (
						''
					)}
					<FormGroup id='complete' className='mb-3' isFloating={true} label='진행여부'>
						<Select
							className='col-12 mb-3'
							ariaLabel='진행여부'
							list={innerItemCompleteList}
							value={formik.values.complete}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='reaction' className='mb-3' label='긍정/부정'>
						<ChecksGroup isInline>
							{innerItemReactionList.map((item) => (
								<Checks
									key={item.text}
									type='radio'
									label={item.text}
									name='reaction'
									value={item.value}
									onChange={formik.handleChange}
									checked={item.value == formik.values.reaction}
									onClick={(e) => {
										console.log(e);
									}}
								/>
							))}
						</ChecksGroup>
					</FormGroup>
					<FormGroup id='advantages' className='mb-3' isFloating={true} label='좋은점'>
						<Select
							className='col-12 mb-3'
							ariaLabel='좋은점'
							list={innerItemAdvantageList}
							value={formik.values.advantages}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='disadvantages' className='mb-3' isFloating={true} label='불편한 점'>
						<Select
							className='col-12 mb-3'
							ariaLabel='불편한 점'
							list={innerItemDisadvantageList}
							value={formik.values.disadvantages}
							onChange={formik.handleChange}></Select>
					</FormGroup>
					<FormGroup id='significant' className='mb-3' isFloating={true} label='특이사항'>
						<Input type='text' value={formik.values.significant} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='giveName' className='mb-3' isFloating={true} label='보호자'>
						<Input type='text' value={formik.values.giveName} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='takeName' className='mb-3' isFloating={true} label='수급자'>
						<Input type='text' value={formik.values.takeName} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='createdAt' className='mb-3' isFloating={true} label='배정날짜'>
						<Input type='text' value={formik.values.createdAt} onChange={formik.handleChange} />
					</FormGroup>
					<FormGroup id='callDate' className='mb-3' isFloating={true} label='완료날짜'>
						<Input type='text' value={formik.values.callDate} onChange={formik.handleChange} />
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={() => formik.submitForm()}>
						저장
					</Button>
					{modalType !== 'C' && (
						<Button
							color='primary'
							icon={'Delete'}
							onClick={() => deleteSmileCall(formik.values.id)}>
							삭제
						</Button>
					)}
				</ModalFooter>
			</Modal>
		</>
	);
};
export default SmileCallDetail;
