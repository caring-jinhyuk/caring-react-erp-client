import React, { useState } from 'react';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Select from '../../../components/bootstrap/forms/Select';
import Input from '../../../components/bootstrap/forms/Input';
import dummy from '../dummy/caregiverListData.json';
import CaregiverDetail from './CaregiverDetail';
import { Burden } from '../../../services/openApi';
import Button from '../../../components/bootstrap/Button';

const CaregiverDashboard = () => {
	const [selectCaregiver, setSelectCaregiver] = useState<any>();
	const [openCaregiverDetail, setOpenCaregiverDetail] = useState(false);

	const dummyData = dummy;

	const openDetail = (item: any) => {
		setSelectCaregiver(item);
		setOpenCaregiverDetail(true);
	};

	return (
		<>
			<Card>
				<CardHeader>
					<Select ariaLabel={'caregiver-search-type'}>
						<option>통합</option>
						<option>번호</option>
						<option>지역</option>
						<option>이름</option>
					</Select>
					<Input type={'text'} placeholder={'검색어를 입력해세요'} />
					<Button icon={'Add'} onClick={() => openDetail(Object())}>
						요양보호사 추가
					</Button>
					<Button icon={'Download'}>데이터 받기</Button>
				</CardHeader>
				<CardBody>
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								<th>이름</th>
								<th>시/도</th>
								<th>시/군/구</th>
								<th>읍/면/동</th>
								<th>추가 희망지역</th>
								<th>번호</th>
							</tr>
						</thead>
						<tbody>
							{dummyData.content.map((item) => (
								// eslint-disable-next-line react/jsx-key
								<tr onClick={() => openDetail(item)}>
									<td>{item.name}</td>
									<td>{item.city}</td>
									<td>{item.ward}</td>
									<td>{item.town}</td>
									<td>{item.hopeArea}</td>
									<td>{item.phone}</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
				{selectCaregiver && (
					<CaregiverDetail
						caregiver={selectCaregiver}
						open={openCaregiverDetail}
						setOpen={setOpenCaregiverDetail}
					/>
				)}
			</Card>
		</>
	);
};

export default CaregiverDashboard;
