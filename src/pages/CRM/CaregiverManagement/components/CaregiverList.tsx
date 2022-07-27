import React, { useCallback, useEffect, useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Select from '../../../../components/bootstrap/forms/Select';
import Input from '../../../../components/bootstrap/forms/Input';
import CaregiverDetail from './CaregiverDetail';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import Button from '../../../../components/bootstrap/Button';

const CaregiverList = () => {
	const [keyword, setKeyword] = useState<string>('');
	const [search, setSearch] = useState<string>('');
	const [caregivers, setCaregivers] = useState<Caregiver[]>();

	const [selectCaregiver, setSelectCaregiver] = useState<any>();
	const [openCaregiverDetail, setOpenCaregiverDetail] = useState(false);

	useEffect(() => {
		//requestCaregiverListHandler();
	}, []);

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'caregiver-keyword':
				setKeyword(e.target.value);
				break;
		}
	}, []);

	const handleOnKeyPress = async (e: any) => {
		if (e.key === 'Enter') {
			await requestCaregiverListHandler();
		}
	};

	const requestCaregiverListHandler = async () => {
		const response = await CaregiverControllerService.getCaregiverListUsingGet(keyword, 0, '', 10);
		setCaregivers(response.content);
	};

	const openDetail = (item: any) => {
		setSelectCaregiver(item);
		setOpenCaregiverDetail(true);
	};

	return (
		<>
			<Card>
				<CardBody>
					<div className='row pb-3'>
						<div className='col-1'>
							<Select
								id='caregiver-keyword'
								onChange={handleOnChange}
								ariaLabel={'caregiver-keyword'}>
								<option value={''}>통합</option>
								<option value={'번호'}>번호</option>
								<option value={'지역'}>지역</option>
								<option value={'이름'}>이름</option>
							</Select>
						</div>
						<div className='col-5'>
							<Input
								id='caregiver-keyword'
								value={search}
								placeholder={'검색어를 입력해세요'}
								onChange={handleOnChange}
								onKeyDown={handleOnKeyPress}
							/>
						</div>

						<div className='col-6'>
							<Button icon={'Add'} onClick={() => openDetail(Object())}>
								요양 보호사 추가
							</Button>
							<Button icon={'Download'}>데이터 추가</Button>
						</div>
					</div>

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
							{caregivers &&
								caregivers.map((item) => (
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

export default CaregiverList;
