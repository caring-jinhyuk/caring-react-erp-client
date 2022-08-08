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
	innerItemCounselorList,
} from '../statics/SmileCallStatics';

import SmileCallDetail from './SmileCallDetail';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SearchBox, smileCallSearchState } from '../../../../atoms/smileCall';
import { smileCallDetailInfo } from '../SmileCallContainer';
import event from '../../../../components/icon/material-icons/Event';

const SmileCallSearchBox = (p: {}) => {
	//규칙 1: 모든 서치값은 useState로 선언 이후 아톰에 적용하는 방식으로 수행. ( 조회버튼 생성시 및 사용자가 검색조건을 전체 설정이후에 조회 1번만 가능하도록 하기 위함)
	const [searchBoxParam, setSearchBoxParam] = useRecoilState(smileCallSearchState); //- 전역 저장용 atom
	//스트링 검색조건 유지 - 입력시마다 (onchange) 이벤트가 발생하므로 따로 처리
	const [inputs, setInputs] = useState<SearchBox>({
		complete: '',
		manager: '',
		searchString: '',
	});

	const { complete, manager, searchString } = inputs; // 비구조화 할당을 통해 값 추출

	const onReset = () => {
		setInputs({
			complete: '',
			manager: '',
			searchString: '',
		});
	};

	const handleOnChange = (e: any) => {
		const { value, name } = e.target;
		setInputs({
			...inputs, // 기존의 input 객체를 복사한 뒤
			[name]: value, // name 키를 가진 값을 value 로 설정
		});

		//스트링 인풋일 경우 제외
		if (name !== 'searchString') handleOnChangeAtom(e);
	};

	//아톰 저장
	const handleOnChangeAtom = (e: any) => {
		const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
		setSearchBoxParam({
			...searchBoxParam, // 기존의 객체를 복사한 뒤
			[name]: value,
		});
	};

	/*스마일콜 추가기능*/
	//ADD정보를 호출 페이지에서 관리 - 추가창을 닫고 다시 추가창을 켯을때 유지되도록(이전 기록 유지), 초기화 버튼 생성
	const [isModal, setModal] = useState<boolean>(false);
	const onClickAddHandler = () => {
		setModal(!isModal);
	};

	return (
		<FormGroup id='searchArea'>
			<div className='row g-3'>
				<div className='col-2'>
					<FormGroup id='complete' className='mb-3' label='진행여부'>
						<Select
							className='col-12 mb-3'
							id='complete'
							name='complete'
							ariaLabel='진행여부'
							list={innerItemCompleteList}
							value={complete}
							onChange={(e) => handleOnChange(e)}></Select>
					</FormGroup>
				</div>
				<div className='col-2'>
					<FormGroup id='manager' className='mb-3' label='담당자'>
						<Select
							className='col-12 mb-3'
							id='manager'
							name='manager'
							ariaLabel='담당자'
							list={innerItemCounselorList}
							value={manager}
							onChange={(e) => handleOnChange(e)}></Select>
					</FormGroup>
				</div>
				<div className='col-3'>
					<FormGroup id='searchString' className='mb-3' label='검색'>
						<Input
							type='text'
							id='searchString'
							name='searchString'
							placeholder={'보호자 또는 수급자 이름'}
							value={searchString}
							onChange={(e) => handleOnChange(e)}
							onKeyUp={(e) => {
								if (e.key === 'Enter') handleOnChangeAtom(e);
							}}></Input>
					</FormGroup>
				</div>
				<div className='col-4'>
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
