import React, { useCallback, useEffect, useState } from 'react';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { Smile, SmileControllerService, Page_Notice_ } from '../../../../services/openApi';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { useSetRecoilState } from 'recoil';
import { Progress, progressState } from '../../../../atoms/progress';
import SmileCallTableRow from './SmileCallTableRow';
import { v1 } from 'uuid';
import PaginationButtons from '../../../../components/PaginationButtons';
import Button from '../../../../components/bootstrap/Button';

const SmileCallList = () => {
	const [smileCallList, setSmileCallList] = useState<Smile[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const setInProgerss = useSetRecoilState(progressState);

	const getSmile = useCallback(async () => {
		const smile: Page_Notice_ = await SmileControllerService.getSmileListUsingGet();

		setInProgerss(Progress.PROCEEDING);
		setSmileCallList(smile.content ?? []);
		setInProgerss(Progress.DONE);
	}, [setInProgerss]);

	useEffect(() => {
		//프로미스 객체 반환
		getSmile().then(() => console.log(1));
	}, [getSmile]);

	return (
		<FormGroup id='listArea'>
			<div className='table-responsive'>
				<table className='table table-modern table-hover'>
					<thead>
						<tr>
							<th scope='col' className='text-center'>
								배정날짜
							</th>
							<th scope='col' className='text-center'>
								현재 상황
							</th>
							<th scope='col' className='text-center'>
								진행 여부
							</th>
							<th scope='col' className='text-center'>
								선호이유
							</th>
							<th scope='col' className='text-center'>
								장점
							</th>
							<th scope='col' className='text-center'>
								불편한점
							</th>
							<th scope='col' className='text-center'>
								담당자
							</th>
							<th scope='col' className='text-center'>
								완료날짜
							</th>
						</tr>
					</thead>
					<tbody>
						{smileCallList.map((smile) => {
							return <SmileCallTableRow key={v1()} smile={smile} />;
						})}
					</tbody>
				</table>
			</div>
			<PaginationButtons
				data={[]}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={1}
				perPage={2}
				setPerPage={setPerPage}
			/>
		</FormGroup>
	);
};

export default SmileCallList;
