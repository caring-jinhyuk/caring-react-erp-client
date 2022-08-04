import React, { useCallback, useEffect, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import {
	Smile,
	SmileControllerService,
	Page_Notice_,
	CaregiverControllerService,
	Page_Smile_,
} from '../../../../services/openApi';

import { selectorFamily, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Progress, progressState } from '../../../../atoms/progress';
import SmileCallTableRow from './SmileCallTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';
import Button from '../../../../components/bootstrap/Button';
import { SearchBox, searchBoxState } from '../../../../atoms/smileCall';
import { useQuery } from '@tanstack/react-query';

export const smileCallState = selectorFamily({
	key: 'smileCallList',
	get:
		({ complete, manager, currentPage, searchString, perPage }: any) =>
		async () => {
			const smileCalls: Page_Smile_ = await SmileControllerService.getSmileListUsingGet(
				complete,
				manager,
				currentPage - 1,
				searchString,
				perPage,
			);
			return smileCalls;
		},
});

//리액트쿼리는 함수명 use를 앞에 붙여주어야한다. (custom hooks)
export const useSmileListUsingGet = (
	complete: string,
	manager: string,
	page: number,
	searchString: string,
	perPage: number,
) => {
	const result = useQuery(
		['smileCallList', { complete, manager, page, searchString, perPage }],
		async () => {
			SmileControllerService.getSmileListUsingGet(
				complete,
				manager,
				page - 1,
				searchString,
				perPage,
			);
		},
		{
			cacheTime: 0,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

const SmileCallList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const searchBoxParam: SearchBox = useRecoilValue<SearchBox>(searchBoxState);

	//const aaa = useSmileListUsingGet(searchBoxParam.complete, searchBoxParam.manager, currentPage, searchBoxParam.searchString, perPage);

	const { content, totalElements } = useRecoilValue(smileCallState({ currentPage, perPage }));
	//let sh = smileCallState({ '','manager',currentPage, 'searchString',perPage })

	return (
		<FormGroup id='listArea'>
			<div className='table-responsive'>
				<table className='table table-modern table-hover'>
					<thead>
						<tr>
							<th scope='col' className='text-center white-space-nowrap'>
								배정날짜
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								현재 상황
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								진행 여부
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								선호이유
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								장점
							</th>
							<th scope='col' className='text-center'>
								불편한점
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								담당자
							</th>
							<th scope='col' className='text-center white-space-nowrap'>
								완료날짜
							</th>
						</tr>
					</thead>
					<tbody>
						{content?.map((smile) => {
							return <SmileCallTableRow key={v1()} smile={smile} />;
						})}
					</tbody>
				</table>
			</div>
			<PaginationButtons
				data={new Array(totalElements)}
				label='notice'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</FormGroup>
	);
};

export default SmileCallList;
