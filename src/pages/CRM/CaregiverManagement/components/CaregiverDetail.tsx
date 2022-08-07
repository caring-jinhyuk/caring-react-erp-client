import React, { FC } from 'react';
import {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../../components/bootstrap/OffCanvas';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import { useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Button from '../../../../components/bootstrap/Button';
import Checks from '../../../../components/bootstrap/forms/Checks';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import showNotification from '../../../../components/extras/showNotification';
import AddressPicker from '../../../../components/AddressPicker';
import { useSetRecoilState } from 'recoil';
import { caregiverSearchParam } from '../CaregiverListHeader';
import { useQueryClient } from '@tanstack/react-query';
import { offCanvasState } from '../../../../atoms/offCanvas';
import { CaregiverForm } from '../../../../models/CaregiverForm';

interface CaregiverDetailProps {
	caregiver: Caregiver;
}

const CaregiverDetail: FC<CaregiverDetailProps> = ({ caregiver }) => {
	const caregiverForm = new CaregiverForm(caregiver);
	const setSearchParam = useSetRecoilState(caregiverSearchParam);
	const setOffCanvas = useSetRecoilState(offCanvasState);
	const queryClient = useQueryClient();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: caregiverForm,
		// eslint-disable-next-line no-unused-vars
		onSubmit: async (values) => {
			//alert(JSON.stringify(values, null, 2));
			const submitValues: Caregiver = {
				id: values.id,
				black: values.black,
				address: values.address,
				career: values.career,
				certificate: values.certificate,
				city: values.city,
				covid: values.covid,
				dementia: values.dementia,
				gender: values.gender !== '남자',
				information: values.information,
				takerProgress: values.takerProgress,
				name: values.name,
				phone: values.phone,
				town: values.town,
				ward: values.ward,
				prefer_gender: makePreferGenderString(values.prefer_gender),
				work_kinds: makeWorkKindString(values.work_kinds),
				hopeArea: makeHomeArea(
					values.hope_city1,
					values.hope_city2,
					values.hope_city3,
					values.hope_ward1,
					values.hope_ward2,
					values.hope_ward3,
				),
				year: values.year,
				createdAt: values.createdAt,
			};
			await saveCaregiver(submitValues);
		},
	});

	const saveCaregiver = async (value: Caregiver) => {
		try {
			await CaregiverControllerService.saveCaregiverUsingPost(value);
			showNotification('등록 성공', value.name + '님의 정보가 등록되었습니다.');
			await queryClient.invalidateQueries(['caregiverList', { keyword: '', search: '' }]);
			setSearchParam({ keyword: '', search: '' });
		} catch (e) {}
	};

	const deleteCaregiver = async (id: number | undefined) => {
		CaregiverControllerService.deleteCaregiverUsingDelete(id!)
			.then((value) => {})
			.catch((error) => {
				showNotification('삭제 실패', '');
			});
	};

	function makePreferGenderString(value?: string[]) {
		let stringPreferGender = '';
		if (value?.includes('남자')) {
			stringPreferGender += '남자 ';
		} else if (value?.includes('여자')) {
			stringPreferGender += '여자';
		}
		return stringPreferGender;
	}

	function makeWorkKindString(value?: string[]) {
		let stringWorkKind = '';
		if (value?.includes('방문요양')) {
			stringWorkKind += '방문요양 ';
		} else if (value?.includes('방문목욕')) {
			stringWorkKind += '방문목욕 ';
		} else if (value?.includes('입주요양')) {
			stringWorkKind += '입주요양 ';
		} else if (value?.includes('요양시설')) {
			stringWorkKind += '요양시설 ';
		}
		return stringWorkKind;
	}

	function makeHomeArea(
		city1?: string,
		city2?: string,
		city3?: string,
		warn1?: string,
		warn2?: string,
		ward3?: string,
	) {
		let stringHomeArea = '';

		if (city1 !== '') {
			stringHomeArea += city1;
			stringHomeArea += ' ' + warn1 + ',';
		}
		if (city2 !== '') {
			stringHomeArea += city2;
			stringHomeArea += ' ' + warn2 + ',';
		}
		if (city3 !== '') {
			stringHomeArea += city3;
			stringHomeArea += ' ' + ward3 + ',';
		}
		return stringHomeArea;
	}

	return (
		<>
			<OffCanvasBody>
				<CardHeader className='bg-transparent'>
					<CardTitle>{caregiver.name}님의 정보</CardTitle>
					<CardActions>
						<Button onClick={() => formik.submitForm()} icon={'Save'} color={'success'}>
							저장
						</Button>
						<Button onClick={() => deleteCaregiver(caregiver.id)} icon={'Delete'} color={'primary'}>
							삭제
						</Button>
						<Button onClick={() => setOffCanvas({ isOpen: false })} icon='close' />
					</CardActions>
				</CardHeader>
				<Card className='mt-5'>
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
						<FormGroup id='gender' className='mb-3' label='성별'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='radio'
										value='남자'
										name='gender'
										label='남자'
										checked={formik.values.gender === '남자'}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										type='radio'
										value='여자'
										name='gender'
										label='여자'
										checked={formik.values.gender === '여자'}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='certificate' className='mb-3' label='자격증유무'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='certificate'
										label='자격증 있음'
										onChange={formik.handleChange}
										checked={formik.values.certificate!}
									/>
								</div>
							</div>
						</FormGroup>
						<div className='mb-3'>
							<AddressPicker
								cityId={'city'}
								cityValue={formik.values.city}
								wardId={'ward'}
								wardValue={formik.values.ward}
								townId={'town'}
								townValue={formik.values.town}
								onChange={formik.handleChange}
							/>
						</div>
						<FormGroup id='address' isFloating={true} label='상세주소'>
							<Input type='text' value={formik.values.address} onChange={formik.handleChange} />
						</FormGroup>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>희망지역</CardHeader>
					<CardBody>
						<AddressPicker
							cityId={'hope_city1'}
							cityValue={formik.values.hope_city1}
							wardId={'hope_ward1'}
							wardValue={formik.values.hope_ward1}
							onChange={formik.handleChange}
						/>
						<AddressPicker
							cityId={'hope_city2'}
							cityValue={formik.values.hope_city2}
							wardId={'hope_ward2'}
							wardValue={formik.values.hope_ward2}
							onChange={formik.handleChange}
						/>
						<AddressPicker
							cityId={'hope_city3'}
							cityValue={formik.values.hope_city3}
							wardId={'hope_ward3'}
							wardValue={formik.values.hope_ward3}
							onChange={formik.handleChange}
						/>
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
									<Checks
										name='work_kinds'
										value={'방문요양'}
										label='방문요양'
										checked={formik.values.work_kinds?.includes('방문요양')}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value={'방문목욕'}
										label='방문목욕'
										checked={formik.values.work_kinds?.includes('방문목욕')}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
							<div className='row'>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value={'입주요양'}
										label='입주요양'
										checked={formik.values.work_kinds?.includes('입주요양')}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value={'요양시설'}
										label='요양시설'
										checked={formik.values.work_kinds?.includes('요양시설')}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='career' isFloating={true} label='경력'>
							<Input type='text' value={formik.values.career} onChange={formik.handleChange} />
						</FormGroup>
						<FormGroup id='prefer_gender' label='선호하는 어르신 성별'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										name='prefer_gender'
										value={'남자'}
										checked={formik.values.prefer_gender?.includes('남자')}
										label='남'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='prefer_gender'
										value={'여자'}
										checked={formik.values.prefer_gender?.includes('여자')}
										label='녀'
										onChange={formik.handleChange}
									/>
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
						<FormGroup id='privacy' label='★유의 요보사 (문자발송/매칭에서 제외)'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='black'
										label='유의 요보사 설정'
										onChange={formik.handleChange}
										checked={formik.values.black!}
									/>
								</div>
							</div>
						</FormGroup>
					</CardBody>
				</Card>
			</OffCanvasBody>
		</>
	);
};

export default CaregiverDetail;
