import React, { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { SmileControllerService, Page_Smile_ } from '../../../../services/openApi';

import {
	selector,
	selectorFamily,
	useRecoilCallback,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';
import { Progress, progressState } from '../../../../atoms/progress';
import SmileCallTableRow from './SmileCallTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';
import { searchBoxState } from '../../../../atoms/smileCall';
import { useQuery } from '@tanstack/react-query';

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
		() => getSmileList(complete, manager, page, searchString, perPage),
		{
			//keepPreviousData: true, // keepPreviousData가 true일 때 isSuccess, isLoading 값이 처음 데이터를 불러오기 시작할 때, 불러온 후 바뀌고 그 후로는 바뀌지 않습니다. -페이징때는 true가 좋음
			cacheTime: 0,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

export const getSmileList = async (
	complete: string,
	manager: string,
	page: number,
	searchString: string,
	perPage: number,
) => SmileControllerService.getSmileListUsingGet(complete, manager, page, searchString, perPage);

const SmileCallList: FC = () => {
	//페이징 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const searchBoxParam = useRecoilValue(searchBoxState);

	//상태의 변경에 따라 리액트쿼리 실행되도록
	const getSmileCallList = useSmileListUsingGet(
		searchBoxParam.complete,
		searchBoxParam.manager,
		currentPage,
		searchBoxParam.searchString,
		perPage,
	);

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
						{getSmileCallList.contents?.content &&
							getSmileCallList.contents.content.map((item) => (
								// eslint-disable-next-line react/jsx-key
								<SmileCallTableRow key={v1()} smile={item} />
							))}
					</tbody>
				</table>
			</div>
			<PaginationButtons
				data={new Array(getSmileCallList.contents?.totalElements)}
				label='smailCall'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</FormGroup>
	);
};

export default SmileCallList;
