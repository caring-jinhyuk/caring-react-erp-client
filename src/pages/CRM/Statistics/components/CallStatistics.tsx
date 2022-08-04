import React from 'react';
import { useGetConsultAllList } from '../../../../quries/useGetConsultListAll';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

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
					{result.contents && (
						<div className='row'>
							<div className='col-3'>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									유입매체
								</Button>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									지역
								</Button>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									상태
								</Button>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									선택이유
								</Button>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									가산희망
								</Button>
								<Button isLight className='col-12 py-4 mb-1' shadow='sm' hoverShadow='none'>
									매니저
								</Button>
							</div>
							<div className='col-9'>
								<table>
									<thead>
										<tr>
											<th>항목</th>
											<th>
												call<span>(서비스 시작 수)</span>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>전화 온 사람</td>
											<td>
												{result.contents.calls}명({result.contents.stateCall[5]})
											</td>
										</tr>
										<tr>
											<td>2번이상 전화한 사람</td>
											<td>
												{result.contents.calls}명({result.contents.recallsService})
											</td>
										</tr>
										{result.contents.inflowList.map((item, index) => (
											<tr key={item}>
												<td>{item}</td>
												<td>
													{result.contents?.itemCall[index]}({result.contents?.itemService[index]})
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default CallStatistics;
