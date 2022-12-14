import React, { FC } from 'react';
import { OffCanvasBody } from '../../../../components/bootstrap/OffCanvas';
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
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { caregiverSearchParam } from '../CaregiverListHeader';
import { useQueryClient } from '@tanstack/react-query';
import { offCanvasState } from '../../../../atoms/offCanvas';
import { CaregiverForm } from '../../../../models/CaregiverForm';
import BirthYearInput from '../../../../components/BirthYearInput';
import { userState } from '../../../../atoms/user';

interface CaregiverDetailProps {
	caregiver: Caregiver;
}

const CaregiverDetail: FC<CaregiverDetailProps> = ({ caregiver }) => {
	const userAtom = useRecoilValue(userState);
	const caregiverForm = new CaregiverForm(caregiver);
	const [searchParam, setSearchParam] = useRecoilState(caregiverSearchParam);
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
				gender: values.gender === '??????',
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
				privacy: values.privacy,
				createdAt: values.createdAt,
				lastModifiedDate: new Date().toISOString(),
				modifier: userAtom?.name,
			};
			await saveCaregiver(submitValues);
		},
	});

	const saveCaregiver = async (value: Caregiver) => {
		try {
			await CaregiverControllerService.saveCaregiverUsingPost(value);
			showNotification('?????? ??????', value.name + '?????? ????????? ?????????????????????.');
			await complete();
		} catch (e) {}
	};

	const deleteCaregiver = async (id: number | undefined) => {
		CaregiverControllerService.deleteCaregiverUsingDelete(id!)
			.then((value) => {
				showNotification('?????? ??????', '????????? ?????????????????????.');
				complete();
			})
			.catch((error) => {
				showNotification('?????? ??????', '');
			});
	};

	const complete = async () => {
		await queryClient.invalidateQueries(['caregiverList', searchParam]);
		setSearchParam(searchParam);
		setOffCanvas({ isOpen: false });
	};

	function makePreferGenderString(value?: string[]) {
		let stringPreferGender = '';
		if (value?.includes('??????')) {
			stringPreferGender += '?????? ';
		}
		if (value?.includes('??????')) {
			stringPreferGender += '??????';
		}
		return stringPreferGender;
	}

	function makeWorkKindString(value?: string[]) {
		let stringWorkKind = '';
		if (value?.includes('????????????')) {
			stringWorkKind += '???????????? ';
		}
		if (value?.includes('????????????')) {
			stringWorkKind += '???????????? ';
		}
		if (value?.includes('????????????')) {
			stringWorkKind += '???????????? ';
		}
		if (value?.includes('????????????')) {
			stringWorkKind += '???????????? ';
		}
		return stringWorkKind;
	}

	function makeHomeArea(
		city1: string = '',
		city2: string = '',
		city3: string = '',
		warn1: string = '',
		warn2: string = '',
		ward3: string = '',
	) {
		let stringHomeArea = '';

		const cities = [city1, city2, city3];
		const warns = [warn1, warn2, ward3];

		for (let i = 0; i < cities.length; i++) {
			if (cities[i] !== '') {
				stringHomeArea += cities[i] + ' ' + warns[i];
				if (cities[i + 1] !== '' && i < 2) {
					stringHomeArea += ',';
				}
			}
		}
		return stringHomeArea;
	}

	return (
		<>
			<OffCanvasBody>
				<CardHeader className='bg-transparent'>
					<CardTitle>
						{caregiver.id !== undefined ? caregiver.name + `?????? ??????` : '??????????????? ??????'}
					</CardTitle>
					<CardActions>
						<Button onClick={() => formik.submitForm()} icon={'Save'} color={'success'}>
							{caregiver.id !== undefined ? '??????' : '??????'}
						</Button>
						<Button onClick={() => deleteCaregiver(caregiver.id)} icon={'Delete'} color={'primary'}>
							??????
						</Button>
						<Button onClick={() => setOffCanvas({ isOpen: false })} icon='close' />
					</CardActions>
				</CardHeader>
				<Card className='mt-5'>
					<CardHeader>????????????</CardHeader>
					<CardBody>
						<FormGroup id='name' className='mb-3' label='??????'>
							<Input type='text' value={formik.values.name} onChange={formik.handleChange} />
						</FormGroup>
						<div className='mb-3'>
							<BirthYearInput
								birthYearId='year'
								birthYearValue={formik.values.year}
								onChange={formik.handleChange}
							/>
						</div>
						<FormGroup id='phone' className='mb-3' label='????????????'>
							<Input type='text' value={formik.values.phone} onChange={formik.handleChange} />
						</FormGroup>
						<FormGroup id='gender' className='mb-3' label='??????'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='radio'
										value='??????'
										name='gender'
										label='??????'
										checked={formik.values.gender === '??????'}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										type='radio'
										value='??????'
										name='gender'
										label='??????'
										checked={formik.values.gender === '??????'}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='certificate' className='mb-3' label='???????????????'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='certificate'
										label='????????? ??????'
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
						<FormGroup id='address' label='????????????'>
							<Input type='text' value={formik.values.address} onChange={formik.handleChange} />
						</FormGroup>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>????????????</CardHeader>
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
						<FormGroup id='information' label='?????????????????? ??????' className='mb-3'>
							<Textarea value={formik.values.information} onChange={formik.handleChange} />
						</FormGroup>
						<FormGroup id='takerProgress' label='???????????? ????????????'>
							<Textarea value={formik.values.takerProgress} onChange={formik.handleChange} />
						</FormGroup>
					</CardBody>
				</Card>

				<Card>
					<CardHeader>????????????</CardHeader>
					<CardBody>
						<FormGroup id='work_kinds' label='????????? ??????' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value='????????????'
										label='????????????'
										checked={formik.values.work_kinds?.includes('????????????')}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value='????????????'
										label='????????????'
										checked={formik.values.work_kinds?.includes('????????????')}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
							<div className='row'>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value='????????????'
										label='????????????'
										checked={formik.values.work_kinds?.includes('????????????')}
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='work_kinds'
										value='????????????'
										label='????????????'
										checked={formik.values.work_kinds?.includes('????????????')}
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='career' label='??????' className='mb-3'>
							<Input type='text' value={formik.values.career} onChange={formik.handleChange} />
						</FormGroup>
						<FormGroup id='prefer_gender' label='???????????? ????????? ??????' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										name='prefer_gender'
										value='??????'
										checked={formik.values.prefer_gender?.includes('??????')}
										label='???'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='col-6'>
									<Checks
										name='prefer_gender'
										value='??????'
										checked={formik.values.prefer_gender?.includes('??????')}
										label='???'
										onChange={formik.handleChange}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='dementia' label='???????????? ??????' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='dementia'
										label='???????????? ?????????'
										onChange={formik.handleChange}
										checked={formik.values.dementia!}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='covid' label='????????? ?????? ?????? ??????' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='covid'
										label='?????????'
										onChange={formik.handleChange}
										checked={formik.values.covid!}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='privacy' label='???????????? ????????????' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='privacy'
										label='?????????'
										onChange={formik.handleChange}
										checked={formik.values.privacy!}
									/>
								</div>
							</div>
						</FormGroup>
						<FormGroup id='black' label='????????? ????????? (????????????/???????????? ??????)' className='mb-3'>
							<div className='row'>
								<div className='col-6'>
									<Checks
										type='switch'
										name='black'
										label='?????? ????????? ??????'
										onChange={formik.handleChange}
										checked={formik.values.black!}
									/>
								</div>
							</div>
						</FormGroup>
					</CardBody>
				</Card>
				<div className='d-flex flex-column m-3'>
					<div className='row'>
						<div>????????? : {caregiverForm.writer}</div>
						<div></div>
					</div>
					<div className='row'>
						<div>?????? ?????? ?????? : {caregiverForm.lastModifiedDate}</div>
						<div></div>
					</div>
					<div className='row'>
						<div>????????? : {caregiverForm.modifier}</div>
						<div></div>
					</div>
				</div>
			</OffCanvasBody>
		</>
	);
};

export default CaregiverDetail;
