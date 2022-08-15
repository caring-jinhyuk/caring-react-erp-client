import React, { FC } from 'react';
import Card, { CardBody, CardHeader, CardTitle } from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import { useRecoilValue } from 'recoil';
import { consultState } from '../../../../atoms/consult';

interface ConsultCustomerInfoProps {
	isModify: boolean;
}

const ConsultCustomerInfo: FC<ConsultCustomerInfoProps> = ({ isModify }) => {
	const { consult } = useRecoilValue(consultState);
	const handleOnChange = () => {};

	console.log(consult);

	return (
		<Card shadow={'sm'}>
			<CardHeader className='pb-1 pt-1 mb-0'>
				<CardTitle>고객정보</CardTitle>
			</CardHeader>
			<CardBody className='pt-1 pb-1'>
				<div className='row'>
					<div className='col-xl-6 col-lg-6 col-md-6'>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>이름</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>관계</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>자격증 유무</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>160시간 근무</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>유입경로</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>선호이유</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
					</div>
					<div className='col-xl-6 col-lg-6 col-md-6'>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>시/도</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>시/군/구</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>가산 희망</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>고객 상태</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>시작 요청일</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default ConsultCustomerInfo;
