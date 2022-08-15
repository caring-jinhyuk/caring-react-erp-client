import React, { FC } from 'react';
import Card, { CardBody, CardHeader, CardTitle } from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import { useRecoilValue } from 'recoil';
import { consultState } from '../../../../atoms/consult';

interface ConsultBeneficiaryInfoProps {
	isModify: boolean;
}

const ConsultBeneficiaryInfo: FC<ConsultBeneficiaryInfoProps> = ({ isModify }) => {
	const { consult } = useRecoilValue(consultState);
	const handleOnChange = () => {};
	return (
		<Card shadow={'sm'}>
			<CardHeader className='pb-0 pt-0 mb-0'>
				<CardTitle>수급자 정보</CardTitle>
			</CardHeader>
			<CardBody isScrollable={true} className='scroll-auto pb-0 pt-0 mb-0'>
				<div className='d-flex align-items-center mb-2'>
					<span className='white-space-nowrap w-25'>이름</span>
					<Input
						className='detail_input w-50'
						disabled={!isModify}
						value={consult?.giveName}
						onChange={handleOnChange}
					/>
				</div>
				<div className='d-flex align-items-center mb-2'>
					<span className='white-space-nowrap w-25'>생년월일</span>
					<Input className='w-50' onChange={handleOnChange} />
				</div>
				<div className='d-flex align-items-center'>
					<span className='white-space-nowrap w-25'>담당자</span>
					<Input className='w-50' onChange={handleOnChange} />
				</div>
			</CardBody>
		</Card>
	);
};

export default ConsultBeneficiaryInfo;
