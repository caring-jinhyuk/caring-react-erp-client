import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../components/bootstrap/OffCanvas';
import { Burden } from '../../../services/openApi';
import PropTypes from 'prop-types';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Button from '../../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Textarea from '../../../components/bootstrap/forms/Textarea';

interface ICaregiverDetail {
	caregiver?: any;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const CaregiverDetail: FC<ICaregiverDetail> = ({ caregiver, open, setOpen }) => {
	return (
		<>
			<OffCanvas isOpen={open} setOpen={setOpen} isModalStyle={true}>
				<OffCanvasHeader>
					<OffCanvasTitle id='selfPayDetail'>
						<div className='row'>
							<div className='col-4'>상세정보</div>
							<div className='col-8'>
								<Button icon={'Calculate'} color={'success'}>
									저장하기
								</Button>
								<Button icon={'Save'} color={'primary'}>
									삭제하기
								</Button>
								<Button icon={'Close'} />
							</div>
						</div>
					</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Card>
						<CardHeader>개인정보</CardHeader>
						<CardBody>
							<FormGroup id='name' className='mb-3' isFloating={true} label='이름'>
								<Input type='text' value={caregiver.name} />
							</FormGroup>
							<FormGroup id='year' className='mb-3' isFloating={true} label='출생년도'>
								<Input type='text' value={caregiver.year} />
							</FormGroup>
							<FormGroup id='phone' className='mb-3' isFloating={true} label='번호'>
								<Input type='text' value={caregiver.phone} />
							</FormGroup>
							<FormGroup id='gender' label='성별'>
								<ChecksGroup>
									<Checks type='radio' name='gender' id='male' label='남' value='male' />
									<Checks type='radio' name='gender' id='female' label='여' value='female' />
								</ChecksGroup>
							</FormGroup>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>희망지역</CardHeader>
						<CardBody>
							<FormGroup id='information' name='information' label='요양보호사의 정보'>
								<Textarea value={caregiver.information} />
							</FormGroup>
							<FormGroup id='takerProgress' name='information' label='수급자별 진행상황'>
								<Textarea value={caregiver.takerProgress} />
							</FormGroup>
						</CardBody>
					</Card>
				</OffCanvasBody>
			</OffCanvas>
		</>
	);
};

export default CaregiverDetail;
