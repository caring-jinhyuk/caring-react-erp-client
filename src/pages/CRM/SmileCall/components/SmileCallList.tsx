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
import { smileCallSearchState } from '../../../../atoms/smileCall';
import { useQuery } from '@tanstack/react-query';
import { downloadCsv } from '../../../../utils/XlsxUtils';
import { smilCallColumns } from '../statics/SmileCallStatics';
import { number } from 'prop-types';

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
			//staleTime:0,
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
) =>
	SmileControllerService.getSmileListUsingGet(complete, manager, page - 1, searchString, perPage);

const SmileCallList: FC = () => {
	//페이징 상태
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const searchBoxParam = useRecoilValue(smileCallSearchState);

	//상태의 변경에 따라 리액트쿼리 실행되도록
	const getSmileCallList = useSmileListUsingGet(
		searchBoxParam.complete,
		searchBoxParam.manager,
		currentPage,
		searchBoxParam.searchString,
		perPage,
	);

	/** 다운로드는 공통 유틸로 빼서 어떻게 할지 고민 해봐야할것 같다.
     function columnValue(item: any, c: any) {
		let d = item[c.value];
		if (c.type === 'date') {
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

     function replace(value: string) {
		return value && value.replace ? value.replace(/,/g, '|').replace(/\n/g, '|') : value;
	}

     const downloadSmileAsCsv = () => {
		SmileControllerService.getSmileAllListUsingGet()
			.then((value) => {
				const rows = [smilCallColumns.map((it) => it.name)];
				value.forEach((smile) => {
					const row: any[] = [];
					smilCallColumns.forEach((c) => {
						row.push(columnValue(smile, c));
					});
					rows.push(row);
				});
				downloadCsv(rows, '스마일콜 리스트.csv');
			})
			.catch((error) => {});
	};
     **/
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
								<SmileCallTableRow key={item.id} smile={item} />
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
