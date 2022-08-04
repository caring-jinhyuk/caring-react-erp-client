import React, { useCallback, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Select from '../../../../components/bootstrap/forms/Select';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import { debounce } from '../../../../helpers/helpers';

import { Caregiver, Smile, SmileControllerService } from '../../../../services/openApi';

import {
	arrToOption,
	selectCompleteItem,
	selectCounselorItem,
} from '../Statistics/SmileCallStatistics';

import SmileCallDetail from './SmileCallDetail';
import { atom, useRecoilState, useRecoilCallback, selector } from 'recoil';
import { resolveSchema } from 'openapi-typescript/dist/load';
import { caregiverModal } from '../../CaregiverManagement/CaregiverContainer';

/*스마일콜 전역상태선언은 타입과 아톰 관리 해야할듯*/
interface SearchBox {
	complete: string;
	manager: string;
	searchString?: string;
}

const searchBoxState = atom<SearchBox>({
	key: 'searchBoxState',
	default: { complete: '전체', manager: '전체', searchString: '' },
});

// const resultValue = useRecoilValue(countStateSelector);
const searchBoxStateSelector = selector({
	key: 'searchBoxStateSelector',

	get: ({ get }) => {
		const inputVal = get(searchBoxState);
		return inputVal.complete;
	},
});

export const smileCallInfo = atom({
	key: 'smileCallInfo',
	default: {} as Smile,
});

const SmileCallSearchBox = () => {
	const [searchBoxParam, setSearchBoxParam] = useRecoilState(searchBoxState);
	//검색조건 유지
	const [searchString, setSearchString] = useState<string>('');

	const [newSmileCallInfo, setNewSmileCallInfo] = useRecoilState(smileCallInfo);

	const handleOnChange = (e: any) => {
		switch (e.target.id) {
			case 'search-complete':
				setSearchBoxParam({
					complete: e.target.value,
					manager: searchBoxParam.manager,
					searchString: searchBoxParam.searchString,
				});
				break;
			case 'search-manager':
				setSearchBoxParam({
					complete: searchBoxParam.complete,
					manager: e.target.value,
					searchString: searchBoxParam.searchString,
				});
				break;
			case 'search-string':
				setSearchString(e.target.value);
				/*
                debounce(
                    () =>
                        setSearchBoxParam({
                            complete: searchBoxParam.complete,
                            manager: searchBoxParam.manager,
                            searchString: e.target.value
                        }),
                    1000,
                )();
                */
				break;
		}
	};

	const handleOnKeyUp = (e: any) => {
		if (e.keyCode === '13') {
			switch (e.target.id) {
				case 'search-string':
					setSearchBoxParam({
						complete: searchBoxParam.complete,
						manager: searchBoxParam.manager,
						searchString: e.target.value,
					});
					break;
			}
		}
	};

	/*스마일콜 추가기능*/
	//ADD정보를 호출 페이지에서 관리 - 추가창을 닫고 다시 추가창을 켯을때 유지되도록(이전 기록 유지), 초기화 버튼 생성
	//추가화면 오픈 관리 설정 - 변수명 관리 여러가지의 팝업이 있고 상태를 관리해야할 경우에 따른 명시
	const [isOpenSmileCallAdd, setIsOpenSmileCallAdd] = useState<boolean>(false);
	const [addSmileCallInfo, setAddSmileCallInfo] = useState<Smile>({});

	const onClickSmileCallAddHandler = () => {
		setIsOpenSmileCallAdd(!isOpenSmileCallAdd);
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
						value={searchBoxParam.complete}
						onChange={(e) => handleOnChange(e)}></Select>
				</div>
				<div className='col-3'>
					<thead style={{ fontWeight: 'bold' }}> 담당자</thead>
					<Select
						className='col-12 mb-3'
						id='search-manager'
						ariaLabel='담당자'
						list={arrToOption(selectCounselorItem, 'all')}
						value={searchBoxParam.manager}
						onChange={(e) => handleOnChange(e)}></Select>
				</div>
				<div className='col-4'>
					<thead style={{ fontWeight: 'bold' }}> 검색</thead>
					<Input
						type='text'
						id='search-string'
						placeholder={'보호자 또는 수급자 이름'}
						value={searchString}
						onChange={(e) => handleOnChange(e)}
						onKeyUp={(e) => handleOnKeyUp(e)}></Input>
				</div>
			</div>
			<div className='row g-3'>
				<div className='col-2'>
					<Button color='primary' icon={'Add'} onClick={onClickSmileCallAddHandler}>
						스마일 콜 추가
					</Button>
					{isOpenSmileCallAdd && (
						<SmileCallDetail
							isOpen={isOpenSmileCallAdd}
							setOpen={setIsOpenSmileCallAdd}
							isMode={'C'}
							smile={newSmileCallInfo}
						/>
					)}
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
