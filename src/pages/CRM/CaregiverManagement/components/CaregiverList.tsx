import React, { useCallback, useEffect, useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../../components/bootstrap/Card';
import Select from '../../../../components/bootstrap/forms/Select';
import Input from '../../../../components/bootstrap/forms/Input';
import CaregiverDetail from './CaregiverDetail';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import Button from '../../../../components/bootstrap/Button';
import { downloadCsv } from '../../../../utils/XlsxUtils';
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue } from 'recoil';
import { v1 } from 'uuid';
import key from '../../../../components/icon/bootstrap/Key';

type NoticeQueryParam = {
	keyword: string;
	search: string;
};

const getCaregiverList = selector<Caregiver[]>({
	key: `${v1()}`,
	get: async () => {
		const response = await CaregiverControllerService.getCaregiverListUsingGet();
		return response.content!;
	},
});

const CaregiverList = () => {
	const [keyword, setKeyword] = useState<string>('');
	const [search, setSearch] = useState<string>('');

	const [selectCaregiver, setSelectCaregiver] = useState<any>();
	const [openCaregiverDetail, setOpenCaregiverDetail] = useState(false);

	useEffect(() => {
		//requestCaregiverListHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'caregiver-keyword':
				setKeyword(e.target.value);
				break;
			case 'caregiver-search':
				setSearch(e.target.value);
				break;
		}
	}, []);

	const handleOnKeyPress = async (e: any) => {
		if (e.key === 'Enter') {
			//await requestCaregiverListHandler();
		}
	};

	// const requestCaregiverListHandler = async () => {
	// 	const response = await CaregiverControllerService.getCaregiverListUsingGet(
	// 		keyword,
	// 		0,
	// 		search,
	// 		10,
	// 	);
	// 	setCaregivers(response.content);
	// };

	const caregivers: Caregiver[] = useRecoilValue(getCaregiverList);

	const openDetail = (item: any) => {
		setSelectCaregiver(item);
		setOpenCaregiverDetail(true);
	};

	const caregiverColumns = [
		{ type: 'date', name: '최초입력날짜', value: 'createdAt' },
		{ name: '자격증 유무', value: 'certificate' },
		{ name: '성별', value: 'gender' },
		{ name: '이름', value: 'name' },
		{ name: '출생년도', value: 'year' },
		{ name: '번호', value: 'phone' },
		{ name: '시/도', value: 'city' },
		{ name: '시/군/구', value: 'ward' },
		{ name: '읍/면/동', value: 'town' },
		{ name: '상세주소', value: 'address' },
		{ name: '희망지역', value: 'hopeArea' },
		{ name: '일자리 종류', value: 'work_kinds' },
		{ name: '경력', value: 'career' },
		{ name: '선호하는 어르신 성별', value: 'prefer_gender' },
		{ name: '치매교육', value: 'dementia' },
		{ name: '코로나 백신', value: 'covid' },
		{ name: '개인정보 활용동의', value: 'privacy' },
		{ name: '작성자', value: 'writer' },
		{ type: 'date', name: '최근수정시간', value: 'lastModifiedDate' },
		{ name: '수정자', value: 'modifier' },
	];

	function replace(value: string) {
		return value && value.replace ? value.replace(/,/g, '|').replace(/\n/g, '|') : value;
	}

	function columnValue(item: any, c: any) {
		let d = item[c.value];
		if (c.type == 'date') {
			try {
				const date = new Date(d);
				return date.toLocaleString();
			} catch (e) {}
		} else if (c.type === 'address') {
			return `${d.zipCode} ${replace(d.address)} ${replace(d.addressDetail)}`;
		} else {
			const path = c.value;
			if (!path) {
				return;
			}
			let value = item;
			path.split('.').forEach((it: string | number) => {
				if (!value) {
					return;
				}
				value = value[it];
			});
			return replace(value);
		}
	}

	const downloadCaregiverAsCsv = () => {
		CaregiverControllerService.getCaregiverAllListUsingGet()
			.then((value) => {
				const rows = [caregiverColumns.map((it) => it.name)];
				value.forEach((caregiver) => {
					const row: any[] = [];
					caregiverColumns.forEach((c) => {
						row.push(columnValue(caregiver, c));
					});
					rows.push(row);
				});
				downloadCsv(rows, '요보사 리스트.csv');
			})
			.catch((error) => {});
	};

	return (
		<>
			<Card>
				<CardBody>
					<div className='row pb-3'>
						<div className='col-2'>
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
						<div className='col-4'>
							<Input
								id='caregiver-search'
								value={search}
								placeholder={'검색어를 입력해세요'}
								onChange={handleOnChange}
								onKeyDown={handleOnKeyPress}
							/>
						</div>

						<div className='col-6'>
							<Button color='primary' icon={'Add'} onClick={() => openDetail(Object())}>
								요양 보호사 추가
							</Button>
							<Button
								className='ms-3'
								color='primary'
								icon={'Download'}
								onClick={() => downloadCaregiverAsCsv()}>
								데이터 받기
							</Button>
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
									<tr key={item.id} onClick={() => openDetail(item)}>
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
