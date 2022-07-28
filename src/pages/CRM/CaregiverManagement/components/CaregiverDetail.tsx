import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../../components/bootstrap/OffCanvas';
import { Burden, Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import PropTypes, { object } from 'prop-types';
import { Field, Form, useFormik } from 'formik';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Button from '../../../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import showNotification from '../../../../components/extras/showNotification';
import AddressPicker from '../../../../components/AddressPicker';

interface ICaregiverDetail {
	caregiver?: any;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const CaregiverDetail: FC<ICaregiverDetail> = ({ caregiver, open, setOpen }) => {
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: caregiver,
		// eslint-disable-next-line no-unused-vars
		onSubmit: async (values) => {
			//alert(JSON.stringify(values, null, 2));
			await saveCaregiver(values);
		},
	});

	const saveCaregiver = async (value: Caregiver) => {
		try {
			const response = await CaregiverControllerService.saveCaregiverUsingPost(value);
			showNotification('등록 성공', value.name + '님의 정보가 등록되었습니다.');
			setOpen(false);
		} catch (e) {}
	};

	const deleteCaregiver = async (id: number) => {
		CaregiverControllerService.deleteCaregiverUsingDelete(id)
			.then((value) => {})
			.catch((error) => {
				showNotification('삭제 실패', '');
			});
	};

	return (
		<>
			<OffCanvas isOpen={open} setOpen={setOpen} isModalStyle={true}>
				<OffCanvasHeader>
					<OffCanvasTitle id='caregiverDetail'>
						<div className='row'>
							<div className='col-4'>상세정보</div>
							<div className='col-8'>
								<Button onClick={() => formik.submitForm()} icon={'Calculate'} color={'success'}>
									저장하기
								</Button>
								<Button
									onClick={() => deleteCaregiver(caregiver.id)}
									icon={'Save'}
									color={'primary'}>
									삭제하기
								</Button>
								<Button onClick={() => setOpen(false)} icon={'Close'} />
							</div>
						</div>
					</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Card>
						<CardHeader>개인정보</CardHeader>
						<CardBody>
							<FormGroup id='name' className='mb-3' isFloating={true} label='이름'>
								<Input type='text' value={formik.values.name} onChange={formik.handleChange} />
							</FormGroup>
							<FormGroup id='year' className='mb-3' isFloating={true} label='출생년도'>
								<Input type='text' value={formik.values.year} onChange={formik.handleChange} />
							</FormGroup>
							<FormGroup id='phone' className='mb-3' isFloating={true} label='번호'>
								<Input type='text' value={formik.values.phone} onChange={formik.handleChange} />
							</FormGroup>
							<FormGroup id='gender' label='성별'>
								<div className='row'>
									<div className='col-6'>
										<Checks type='radio' name='gender' label='남' onChange={formik.handleChange} />
									</div>
									<div className='col-6'>
										<Checks type='radio' name='gender' label='여' onChange={formik.handleChange} />
									</div>
								</div>
							</FormGroup>
							<FormGroup id='caregiver.certificate' label='자격증유무'>
								<div className='row'>
									<div className='col-6'>
										<Checks
											type='radio'
											name='caregiver.certificate'
											label='유'
											value='certificateYess'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-6'>
										<Checks
											type='radio'
											name='caregiver.certificate'
											label='무'
											value='certificateNo'
											onChange={formik.handleChange}
										/>
									</div>
								</div>
							</FormGroup>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>희망지역</CardHeader>
						<CardBody>
							<AddressPicker />
							<FormGroup id='information' label='요양보호사의 정보'>
								<Textarea value={formik.values.information} onChange={formik.handleChange} />
							</FormGroup>
							<FormGroup id='takerProgress' label='수급자별 진행상황'>
								<Textarea value={formik.values.takerProgress} onChange={formik.handleChange} />
							</FormGroup>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>추가사항</CardHeader>
						<CardBody>
							<FormGroup id='work_kinds' label='일자리 종류'>
								<div className='row'>
									<div className='col-6'>
										<Checks name='work_kinds' label='방문요양' />
									</div>
									<div className='col-6'>
										<Checks name='work_kinds' label='방문목욕' />
									</div>
								</div>
								<div className='row'>
									<div className='col-6'>
										<Checks name='work_kinds' label='입주요양' />
									</div>
									<div className='col-6'>
										<Checks name='work_kinds' label='요양시설' />
									</div>
								</div>
							</FormGroup>
							<FormGroup id='career' isFloating={true} label='경력'>
								<Input type='text' value={formik.values.career} onChange={formik.handleChange} />
							</FormGroup>
							<FormGroup id='prefer_gender' label='선호하는 어르신 성별'>
								<div className='row'>
									<div className='col-6'>
										<Checks name='prefer_gender' label='남' />
									</div>
									<div className='col-6'>
										<Checks name='prefer_gender' label='녀' />
									</div>
								</div>
							</FormGroup>
							<FormGroup id='dementia' label='치매교육 이수'>
								<div className='row'>
									<div className='col-6'>
										<Checks
											type='switch'
											name='dementia'
											label='치매교육 이수함'
											onChange={formik.handleChange}
											checked={formik.values.dementia!}
										/>
									</div>
								</div>
							</FormGroup>
							<FormGroup id='covid' label='코로나 백신 접종 여부'>
								<div className='row'>
									<div className='col-6'>
										<Checks
											type='switch'
											name='covid'
											label='접종함'
											onChange={formik.handleChange}
											checked={formik.values.covid!}
										/>
									</div>
								</div>
							</FormGroup>
							<FormGroup id='privacy' label='개인정보 활용동의'>
								<div className='row'>
									<div className='col-6'>
										<Checks
											type='switch'
											name='privacy'
											label='동의함'
											onChange={formik.handleChange}
											checked={formik.values.privacy!}
										/>
									</div>
								</div>
							</FormGroup>
						</CardBody>
					</Card>
				</OffCanvasBody>
			</OffCanvas>
		</>
	);
};

export default CaregiverDetail;
