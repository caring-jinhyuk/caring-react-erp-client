import React, { useCallback, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Select from '../../../../components/bootstrap/forms/Select';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import { debounce } from '../../../../helpers/helpers';

import { Smile, SmileControllerService } from '../../../../services/openApi';

import {
	arrToOption,
	innerItemCompleteList,
	innerItemCounselors,
} from '../statics/SmileCallStatics';

import SmileCallDetail from './SmileCallDetail';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SearchBox, searchBoxState } from '../../../../atoms/smileCall';
import { smileCallDetailInfo } from '../SmileCallContainer';

const SmileCallSearchBox = () => {
	//셀렉트,체크 등 단건의 이벤트가 발생하는 곳 (onchange 시) - 전역 저장용 atom
	const [searchBoxParam, setSearchBoxParam] = useRecoilState(searchBoxState);

	//스트링 검색조건 유지 - 입력시마다 (onchange) 이벤트가 발생하므로 따로 처리
	const [complete, setComplete] = useState<string>('');
	const [manager, setManager] = useState<string>('');
	const [searchString, setSearchString] = useState<string>('');

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
				break;
		}
	};

	//스트링 파라메터 관련 debounce 고려
	const handleOnKeyUp = (e: any) => {
		if (e.keyCode === 13) {
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
	const [isModal, setModal] = useState<boolean>(false);

	const onClickAddHandler = () => {
		setModal(!isModal);
	};

	return (
		<FormGroup id='searchArea'>
			<div className='row g-3'>
				<div className='col-2'>
					<thead style={{ fontWeight: 'bold' }}> 진행여부</thead>
					<Select
						className='col-12 mb-3'
						id='search-complete'
						ariaLabel='진행여부'
						list={innerItemCompleteList}
						value={searchBoxParam.complete}
						onChange={(e) => handleOnChange(e)}></Select>
				</div>
				<div className='col-2'>
					<thead style={{ fontWeight: 'bold' }}> 담당자</thead>
					<Select
						className='col-12 mb-3'
						id='search-manager'
						ariaLabel='담당자'
						list={arrToOption(innerItemCounselors, 'all')}
						value={searchBoxParam.manager}
						onChange={(e) => handleOnChange(e)}></Select>
				</div>
				<div className='col-2'>
					<thead style={{ fontWeight: 'bold' }}> 검색</thead>
					<Input
						type='text'
						id='search-string'
						placeholder={'보호자 또는 수급자 이름'}
						value={searchString}
						onChange={(e) => handleOnChange(e)}
						onKeyUp={(e) => handleOnKeyUp(e)}></Input>
				</div>
				<div className='col-4'>
					<thead style={{ fontWeight: 'bold' }}> 기능</thead>
					<Button color='primary' icon={'Add'} onClick={onClickAddHandler}>
						스마일 콜 추가
					</Button>
					{isModal && (
						<SmileCallDetail
							isOpen={isModal}
							setOpen={setModal}
							modalType={'C'}
							smile={{} as Smile}
							title={'스마일콜 추가'}
						/>
					)}
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
