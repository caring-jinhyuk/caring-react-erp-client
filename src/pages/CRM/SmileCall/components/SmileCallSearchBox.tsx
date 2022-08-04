import React, { useCallback, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Select from '../../../../components/bootstrap/forms/Select';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../../../components/bootstrap/forms/Checks';

import { Caregiver, Smile, SmileControllerService } from '../../../../services/openApi';
import {
	arrToOption,
	selectCompleteItem,
	selectCounselorItem,
} from '../Statistics/SmileCallStatistics';

import SmileCallDetail from './SmileCallDetail';
import { atom, useSetRecoilState, atomFamily, useRecoilState } from 'recoil';
import { useFormik } from 'formik';
import { useQueryClient } from '@tanstack/react-query';
import { caregiverSearchParam } from '../../CaregiverManagement/CaregiverListHeader';

//검색조건 선언 및 초기화
export const smileCallSearchComplete = atom({
	key: 'smileCallSearchComplete',
	default: '전체',
});

export const smileCallSearchManager = atom({
	key: 'smileCallSearchManager',
	default: '전체',
});

export const smileCallSearchString = atom({
	key: 'smileCallSearchString',
	default: '',
});

const SmileCallSearchBox = () => {
	//const setSearchParam = useSetRecoilState(smileCallSearchParams);

	// formik 구조와 config를 설정하는 formik객체
	// const formikSearch = useFormik({
	//     // 설정할 초기값
	//     initialValues: smileCallSearchParams,
	//     // 제출시 처리할 함수. 인자로 value객체를 가져온다.
	//     onSubmit: async (values) => {
	//
	//         //alert(JSON.stringify(values, null, 2));
	//         await saveCaregiver(values);
	//     },
	//     // 값 변경시마다 validation 체크
	//     //validateOnChange: true,
	//     // 인풋창 블러시에 validation 체크
	//     //validateOnBlur: true,
	//     // validation 체크할 함수
	//     //validate: validator
	// });

	//검색조건 설정 및 이벤트 관리
	const [complete, setComplete] = useState<string>('전체');
	const [manager, setManager] = useState<string>('전체');
	const [searchString, setSearchString] = useState<string>('');

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'search-complete':
				setComplete(e.target.value);
				break;
			case 'search-manager':
				setManager(e.target.value);
				break;
			case 'search-string':
				setSearchString(e.target.value);
				break;
		}
	}, []);

	/*스마일콜 추가기능*/
	//ADD정보를 호출 페이지에서 관리 - 추가창을 닫고 다시 추가창을 켯을때 유지되도록(이전 기록 유지), 초기화 버튼 생성
	//추가화면 오픈 관리 설정 - 변수명 관리 여러가지의 팝업이 있고 상태를 관리해야할 경우에 따른 명시
	const [isOpenSmileCallAdd, setIsOpenSmileCallAdd] = useState<boolean>(false);
	const [addSmileCallInfo, setAddSmileCallInfo] = useState<Smile>({});

	const onClickSmileCallAddHandler = () => {
		setIsOpenSmileCallAdd(!isOpenSmileCallAdd);
		alert(JSON.stringify(addSmileCallInfo));
	};

	return (
		<FormGroup id='searchArea'>
			<div className='row g-3'>
				<div className='col-3'>
					<thead style={{ fontWeight: 'bold' }}> 진행여부</thead>
					<Select
						className='col-12 mb-3'
						id='search-complete'
						ariaLabel='진행여부'
						list={selectCompleteItem}
						value={complete}
						onChange={handleOnChange}></Select>
				</div>
				<div className='col-3'>
					<thead style={{ fontWeight: 'bold' }}> 담당자</thead>
					<Select
						className='col-12 mb-3'
						id='search-manager'
						ariaLabel='담당자'
						list={arrToOption(selectCounselorItem)}
						value={manager}
						onChange={handleOnChange}></Select>
				</div>
				<div className='col-4'>
					<thead style={{ fontWeight: 'bold' }}> 검색</thead>
					<Input
						type='text'
						id='search-string'
						placeholder={'보호자 또는 수급자 이름'}
						value={searchString}
						onChange={handleOnChange}
					/>
				</div>
			</div>
			<div className='row g-3'>
				<div className='col-2'>
					<Button color='primary' icon={'Add'} onClick={onClickSmileCallAddHandler}>
						스마일 콜 추가
					</Button>
					<SmileCallDetail
						isOpen={isOpenSmileCallAdd}
						setOpen={setIsOpenSmileCallAdd}
						isMode={'C'}
						smile={{}}
					/>
				</div>
				<div className='col-3'>
					<Button
						color='primary'
						icon='CloudDownload'
						tag='a'
						to='/somefile.txt'
						target='_blank'
						download>
						스마일콜 데이터 다운로드
					</Button>
				</div>
			</div>
		</FormGroup>
	);
};

export default SmileCallSearchBox;
