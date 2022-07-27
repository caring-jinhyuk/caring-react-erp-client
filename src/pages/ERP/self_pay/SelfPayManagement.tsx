import React, { useCallback, useState } from 'react';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Page from '../../../layout/Page/Page';
import Select from '../../../components/bootstrap/forms/Select';
import Option from '../../../components/bootstrap/Option';
import recipientData from '../../../common/recipientDummy.json';
import { Burden } from '../../../services/openApi';
import SelfPayDetail from './components/SelfPayDetail';
import SelfPayManagementDetail from './components/SelfPayManagementDetail';

const SelfPayManagement = () => {
	const [centerId, setCenterId] = useState<string>('');
	const [keyword, setKeyword] = useState<string>('');
	const [status, setStatus] = useState<string>('');

	const [openSelfPayManagementDetail, setOpenSelfPayManagementDetail] = useState(false);

	const recipient = recipientData;

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'search-center':
				setCenterId(e.target.value);
				break;
			case 'search-keyword':
				setKeyword(e.target.value);
				break;
		}
	}, []);

	const openDetail = () => {
		setOpenSelfPayManagementDetail(true);
	};

	return (
		<>
			<Page>
				<Card>
					<CardHeader>
						<FormGroup className='mb-3' isFloating={false} label='상태'>
							<Select ariaLabel='상태' placeholder='상태' onChange={handleOnChange} value={status}>
								<Option>수급중</Option>
								<Option>계약종료 - 기타사유</Option>
								<Option>계약종료 - 사망</Option>
								<Option>계약종료 - 병원 입원</Option>
								<Option>보류중 (계약 중, 단기입원 등 일정 불가)</Option>
								<Option>계약종료 - 타기관 이동</Option>
								<Option>계약종료 - 요양원 입소</Option>
							</Select>
						</FormGroup>
						<FormGroup id='search-center' className='mb-3' isFloating={false} label='센터'>
							<Input type='text' value={centerId} onChange={handleOnChange} />
						</FormGroup>
						<FormGroup id='search-keyword' className='mb-3' isFloating={false} label='이름 검색'>
							<Input type='text' value={keyword} onChange={handleOnChange} />
						</FormGroup>
					</CardHeader>
					<CardBody>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th>센터</th>
									<th>이름</th>
									<th>생년월일</th>
									<th>본인부담금 총 청구액</th>
									<th>본인부담금 총 납부액</th>
									<th>미납금액</th>
									<th>상태</th>
								</tr>
							</thead>
							<tbody>
								{recipient.content.map((item) => (
									<tr key={item.id} onClick={() => openDetail()}>
										<td></td>
										<td>{item.name}</td>
										<td>{item.birthDate}</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
				</Card>
				<SelfPayManagementDetail
					open={openSelfPayManagementDetail}
					setOpen={setOpenSelfPayManagementDetail}
				/>
			</Page>
		</>
	);
};

export default SelfPayManagement;
