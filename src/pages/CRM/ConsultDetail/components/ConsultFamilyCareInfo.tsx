import React, { FC } from 'react';
import Card, { CardBody, CardHeader, CardTitle } from '../../../../components/bootstrap/Card';
import Input from '../../../../components/bootstrap/forms/Input';
import { useRecoilValue } from 'recoil';
import { consultState } from '../../../../atoms/consult';
interface ConsultFamilyCareInfoProps {
	isModify: boolean;
}

const ConsultFamilyCareInfo: FC<ConsultFamilyCareInfoProps> = ({ isModify }) => {
	const { consult } = useRecoilValue(consultState);
	const handleOnChange = () => {};

	return (
		<Card shadow={'sm'}>
			<CardHeader className='pb-1 pt-1 mb-0'>
				<CardTitle>가족요양 파악조건</CardTitle>
			</CardHeader>
			<CardBody className='pt-1 pb-1'>
				<div className='row'>
					<div className='col-xl-6 col-lg-6 col-md-6'>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>건강검진 안내 유무</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>태그 유무</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>{' '}
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>핸드폰 기종</span>
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
							<span className='white-space-nowrap w-25'>투폰 여부</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>국적</span>
							<Input
								className='detail_input w-50'
								onChange={handleOnChange}
								disabled={!isModify}
								value={consult?.giveName}
							/>
						</div>
						<div className='d-flex align-items-center mb-2'>
							<span className='white-space-nowrap w-25'>실업급여 수령 여부</span>
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

export default ConsultFamilyCareInfo;
