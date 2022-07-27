import React, { useCallback, useState } from 'react';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { Burden, BurdenControllerService } from '../../../services/openApi';
import Button from '../../../components/bootstrap/Button';
import MonthPicker from '../../../components/MonthPicker';
import burdenData from '../../../common/burdenDummy.json';
import Page from '../../../layout/Page/Page';
import SelfPayDetail from './components/SelfPayDetail';

const SelfPayList = () => {
	const [month, setMonth] = useState<Date>(new Date());
	const [centerId, setCenterId] = useState<string>('');
	const [keyword, setKeyword] = useState<string>('');
	const [manager, setManager] = useState<string>('');

	const [selectBurden, setSelectBurden] = useState<Burden>();
	const [openSelfPayDetail, setOpenSelfPayDetail] = useState(false);

	const burdenDummy: any[] = burdenData;

	const handleOnChange = useCallback((e: any) => {
		const requestSelfPayList = () => {
			// BurdenControllerService.centerAllBurdenListUsingPost({ center: 4, month: '2022-4' })
			// 	.then((value) => {
			// 		console.log('success');
			// 	})
			// 	.catch((error) => {
			// 		console.log('error');
			// 	});
		};

		switch (e.target.id) {
			case 'search-center':
				setCenterId(e.target.value);
				break;
			case 'search-manager':
				setManager(e.target.value);
				break;
			case 'search-keyword':
				setKeyword(e.target.value);
				break;
		}
	}, []);

	const openDetail = (item: Burden) => {
		setSelectBurden(item);
		setOpenSelfPayDetail(true);
	};

	return (
		<>
			<Page>
				<Card>
					<CardHeader>
						<FormGroup className='mb-3' isFloating={false} label='월 선택'>
							<MonthPicker month={month} setMonth={setMonth} />
						</FormGroup>
						<FormGroup id='search-center' className='mb-3' isFloating={false} label='센터'>
							<Input type='text' value={centerId} onChange={handleOnChange} />
						</FormGroup>
						<FormGroup id='search-manager' className='mb-3' isFloating={false} label='담당자'>
							<Input type='text' value={manager} onChange={handleOnChange} />
						</FormGroup>
						<FormGroup id='search-keyword' className='mb-3' isFloating={false} label='이름 검색'>
							<Input type='text' value={keyword} onChange={handleOnChange} />
						</FormGroup>
						<Button color={'primary'}>엑셀 다운로드</Button>
					</CardHeader>
					<CardBody>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th>수급자</th>
									<th>생년월일</th>
									<th>수가총액</th>
									<th>본인부담금</th>
									<th>공단청구금</th>
									<th>확정여부</th>
								</tr>
							</thead>
							<tbody>
								{burdenDummy.map((item) => (
									<tr key={item.id} onClick={() => openDetail(item)}>
										<td>{item.recipient?.name}</td>
										<td>{item.recipient?.birthDate}</td>
										<td>{item.priceSum}</td>
										<td>{item.burdenSum}</td>
										<td>{item.requestSum}</td>
										<td>{item.complete}</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
				</Card>
				{selectBurden != null ? (
					<SelfPayDetail
						burden={selectBurden}
						open={openSelfPayDetail}
						setOpen={setOpenSelfPayDetail}
					/>
				) : null}
			</Page>
		</>
	);
};

export default SelfPayList;
