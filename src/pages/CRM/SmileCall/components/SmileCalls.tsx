import React, { useCallback, useEffect, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { Smile, SmileControllerService, Page_Notice_ } from '../../../../services/openApi';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { selectorFamily, useRecoilValue, useSetRecoilState } from 'recoil';
import { Progress, progressState } from '../../../../atoms/progress';
import SmileCallTableRow from './SmileCallTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';
import Button from '../../../../components/bootstrap/Button';

export const smileCallState = selectorFamily({
	key: 'smileCalls',
	get:
		({ currentPage, perPage }: any) =>
		async () => {
			const smileCalls: Page_Notice_ = await SmileControllerService.getSmileListUsingGet(
				'',
				'',
				currentPage - 1,
				'',
				perPage,
			);
			return smileCalls;
		},
});
const SmileCalls = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { content, totalElements } = useRecoilValue(smileCallState({ currentPage, perPage }));

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

export default SmileCalls;
