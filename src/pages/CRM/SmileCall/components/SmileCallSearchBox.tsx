import React, { useCallback, useState } from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Select from '../../../../components/bootstrap/forms/Select';
import Button from '../../../../components/bootstrap/Button';
import Input from '../../../../components/bootstrap/forms/Input';
import Checks from '../../../../components/bootstrap/forms/Checks';
import { Progress, progressState } from '../../../../atoms/progress';
import { Smile, SmileControllerService, Page_Notice_ } from '../../../../services/openApi';

import {
	arrToOption,
	selectCompleteItem,
	selectCounselorItem,
} from '../Statistics/SmileCallStatistics';
import { atomFamily, useRecoilState } from 'recoil';

export type SearchProp = {
	id: string;
	value: any;
	active: true;
};

const SmileCallSearchBox = () => {
	//searchProps
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
				<div className='col-2'>
					<Button
						color='primary'
						icon={'Add'}
						//onClick={() => setCurrentStep(currentStep - 1)}
					>
						스마일 콜 추가
					</Button>
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
			<div>
				<thead style={{ fontWeight: 'bold' }}> 검색</thead>
				<Input type='text' id='search-string' value={searchString} onChange={handleOnChange} />
			</div>
			<div>
				<Checks
					checked
					id='example'
					label='Switch'
					name='example'
					onChange={function noRefCheck() {}}
					type='switch'
					value={'test'}
				/>

				<Checks
					checked
					id='example'
					label='Radio'
					name='example'
					onChange={function noRefCheck() {}}
					type='radio'
					value='radio value'
				/>
			</div>
		</FormGroup>
	);
};

export default SmileCallSearchBox;
