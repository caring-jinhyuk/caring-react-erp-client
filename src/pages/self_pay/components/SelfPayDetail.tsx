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

interface ISelfPayDetail {
	burden: Burden;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const SelfPayDetail: FC<ISelfPayDetail> = ({ burden, open, setOpen }) => {
	return (
		<>
			<OffCanvas isOpen={open} setOpen={setOpen} isModalStyle={true}>
				<OffCanvasHeader>
					<OffCanvasTitle id='selfPayDetail'>
						<div className='row'>
							<div className='col-4'>{burden.recipient?.name}님</div>
							<div className='col-8'>
								<Button icon={'Calculate'} color={'success'}>
									재계산
								</Button>
								<Button icon={'Save'} color={'primary'}>
									저장하기
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
							<div className='row'>
								<div className='col-4'>이름</div>
								<div className='col-8'>{burden.recipient?.name}</div>
							</div>
							<div className='row'>
								<div className='col-4'>생년월일</div>
								<div className='col-8'>{burden.recipient?.birthDate}</div>
							</div>
							<div className='row'>
								<div className='col-4'>담당자</div>
								<div className='col-8'>{burden.recipient?.manager?.name}</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>서비스 정보</CardHeader>
						<CardBody>
							<div>
								<div>서비스 종류</div>
								<div></div>
							</div>
							<div>
								<div>서비스 시간</div>
								<div></div>
							</div>
							<div>
								<div>근로 일정</div>
								<div></div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>본인부담금 관리</CardHeader>
						<CardBody>
							<FormGroup id='priceSum' className='mb-3' isFloating={true} label='수가총액'>
								<Input type='number' value={burden.priceSum} component='NumberFormat' />
							</FormGroup>
							<FormGroup id='burdenSum' className='mb-3' isFloating={true} label='본인부담금'>
								<Input type='number' value={burden.burdenSum} component='NumberFormat' />
							</FormGroup>
							<FormGroup id='requestSum' className='mb-3' isFloating={true} label='공단청구금'>
								<Input type='number' value={burden.requestSum} component='NumberFormat' />
							</FormGroup>
							{/*<FormGroup id='priceSum' className='mb-3' isFloating={true} label='확정여부'>*/}
							{/*	<Input type='number' value={burden.complete} />*/}
							{/*</FormGroup>*/}
						</CardBody>
					</Card>
					<Card>
						<CardHeader>일정확인</CardHeader>
					</Card>
				</OffCanvasBody>
			</OffCanvas>
		</>
	);
};

export default SelfPayDetail;
