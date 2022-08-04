import React, { Dispatch, FC, SetStateAction, useState, useEffect } from 'react';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../../components/bootstrap/OffCanvas';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import { useFormik, useFormikContext } from 'formik';
import Card, { CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Button from '../../../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import showNotification from '../../../../components/extras/showNotification';
import AddressPicker from '../../../../components/AddressPicker';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// eslint-disable-next-line import/named
import { caregiverModal, selectCaregiver } from '../CaregiverContainer';
import { caregiverSearchParam } from '../CaregiverListHeader';
import { useQueryClient } from '@tanstack/react-query';
import exp from 'constants';

export type CaregiverForm = {
	address?: string;
	black?: boolean;
	blackReason?: string;
	career?: number;
	certificate?: boolean;
	city?: string;
	covid?: boolean;
	createdAt?: string;
	dementia?: boolean;
	gender: string;
	hopeArea?: string;
	id?: number;
	information?: string;
	lastModifiedDate?: string;
	modifier?: string;
	msgLastSendTime1?: string;
	msgLastSendTime2?: string;
	msgLastSendTime3?: string;
	name?: string;
	phone?: string;
	prefer_gender: string[];
	privacy?: boolean;
	sendNumber1?: string;
	sendNumber2?: string;
	sendNumber3?: string;
	takerProgress?: string;
	town?: string;
	ward?: string;
	work_kinds: string[];
	writer?: string;
	year?: number;
	hope_city1?: string;
	hope_city2?: string;
	hope_city3?: string;
	hope_ward1?: string;
	hope_ward2?: string;
	hope_ward3?: string;
	hope_area?: HopeArea;
};

export type HopeArea = {
	hope_city1: string;
	hope_city2: string;
	hope_city3: string;
	hope_ward1: string;
	hope_ward2: string;
	hope_ward3: string;
};

const CaregiverDetail: FC = () => {
	const caregiver = useRecoilValue(selectCaregiver);

	const formCaregiver: CaregiverForm = {
		id: caregiver.id,
		black: caregiver.black,
		address: caregiver.address,
		career: caregiver.career,
		certificate: caregiver.certificate,
		city: caregiver.city,
		covid: caregiver.covid,
		dementia: caregiver.dementia,
		gender: caregiver.gender === undefined || false ? '여자' : '남자',
		hopeArea: caregiver.hopeArea,
		information:
			caregiver.information ||
			'이력/경력사항 : \n' + '요보사가 원하는 사항 : \n' + '면접 특이사항 : ',
		takerProgress:
			caregiver.takerProgress ||
			'1. 수급자 지역 : \n' + '2. 수급자 전화번호: \n' + '3. 수급자 날짜별 진행 상황 : ',
		name: caregiver.name,
		phone: caregiver.phone,
		prefer_gender: convertPreferGender(caregiver.prefer_gender),
		work_kinds: convertWorkKind(caregiver.work_kinds),
		town: caregiver.town,
		ward: caregiver.ward,
		hope_area: convertHopeArea(caregiver.hopeArea),
		year: caregiver.year,
		createdAt: caregiver.createdAt,
	};
	const [open, setOpen] = useRecoilState(caregiverModal);
	const setSearchParam = useSetRecoilState(caregiverSearchParam);
	const queryClient = useQueryClient();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: formCaregiver,
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
					values.hope_area!.hope_city1,
					values.hope_area!.hope_city2,
					values.hope_area!.hope_city3,
					values.hope_area!.hope_ward1,
					values.hope_area!.hope_ward2,
					values.hope_area!.hope_ward3,
				),
				year: values.year,
				createdAt: values.createdAt,
			};
			await saveCaregiver(submitValues);
		},
	});

	const saveCaregiver = async (value: Caregiver) => {
		try {
			const response = await CaregiverControllerService.saveCaregiverUsingPost(value);
			showNotification('등록 성공', value.name + '님의 정보가 등록되었습니다.');
			setOpen(false);
			await queryClient.invalidateQueries(['caregiverList', { keyword: '', search: '' }]);
			//setSearchParam({ keyword: '', search: '' });
		} catch (e) {}
	};

	const deleteCaregiver = async (id: number | undefined) => {
		CaregiverControllerService.deleteCaregiverUsingDelete(id!)
			.then((value) => {})
			.catch((error) => {
				showNotification('삭제 실패', '');
			});
	};

	function convertPreferGender(value?: string) {
		if (value === null) {
			return [];
		} else {
			const arrGender = [];
			if (value?.includes('남자')) {
				arrGender.push('남자');
			} else if (value?.includes('여자')) {
				arrGender.push('여자');
			}
			return arrGender;
		}
	}

	function convertWorkKind(value?: string) {
		if (value === null) {
			return [];
		} else {
			const arrWorkKind = [];
			if (value?.includes('방문요양')) {
				arrWorkKind.push('방문요양');
			} else if (value?.includes('방문목욕')) {
				arrWorkKind.push('방문목욕');
			} else if (value?.includes('입주요양')) {
				arrWorkKind.push('입주요양');
			} else if (value?.includes('요양시설')) {
				arrWorkKind.push('요양시설');
			}

			return arrWorkKind;
		}
	}

	function convertHopeArea(value?: string) {
		if (value == null) {
			const emptyHopeArea: HopeArea = {
				hope_city1: '',
				hope_city2: '',
				hope_city3: '',
				hope_ward1: '',
				hope_ward2: '',
				hope_ward3: '',
			};
			return emptyHopeArea;
		} else {
			const homeValue = value?.split(',');
			const hopeTown = ['', '', ''];
			const hopeWard = ['', '', ''];
			for (let i = 0; i < homeValue.length; i++) {
				hopeTown[i] = homeValue[i].substr(0, 2);
				hopeWard[i] = homeValue[i].substring(3);
			}

			const hopeAreaValue: HopeArea = {
				hope_city1: hopeTown[0],
				hope_city2: hopeTown[1],
				hope_city3: hopeTown[2],
				hope_ward1: hopeWard[0],
				hope_ward2: hopeWard[1],
				hope_ward3: hopeWard[2],
			};

			return hopeAreaValue;
		}
	}

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
								cityId={'hope_area.hope_city1'}
								cityValue={formik.values.hope_area!.hope_city1}
								wardId={'hope_area.hope_ward1'}
								wardValue={formik.values.hope_area!.hope_ward1}
								onChange={formik.handleChange}
							/>
							<AddressPicker
								cityId={'hope_area.hope_city2'}
								cityValue={formik.values.hope_area!.hope_city2}
								wardId={'hope_area.hope_ward2'}
								wardValue={formik.values.hope_area!.hope_ward2}
								onChange={formik.handleChange}
							/>
							<AddressPicker
								cityId={'hope_area.hope_city3'}
								cityValue={formik.values.hope_area!.hope_city3}
								wardId={'hope_area.hope_ward3'}
								wardValue={formik.values.hope_area!.hope_ward3}
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
			</OffCanvas>
		</>
	);
};

export default CaregiverDetail;
