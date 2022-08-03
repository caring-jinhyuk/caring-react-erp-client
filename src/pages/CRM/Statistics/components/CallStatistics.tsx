import React from 'react';
import { useGetConsultAllList } from '../../../../quries/useGetConsultListAll';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';

const CallStatistics = () => {
	const result = useGetConsultAllList();

	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel icon='ReceiptLong'>
						<CardTitle tag='h4' className='h5'>
							전체 콜 통계
						</CardTitle>
						<CardSubTitle tag='h5' className='h6'>
							Reports
						</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<div className='row'>
						<div className='col-3'></div>
						<div className='col-9'></div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default CallStatistics;
