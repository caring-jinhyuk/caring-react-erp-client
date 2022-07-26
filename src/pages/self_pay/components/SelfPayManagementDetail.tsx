import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasTitle,
	OffCanvasBody,
} from '../../../components/bootstrap/OffCanvas';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';

interface ISelfPayManagementDetail {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const SelfPayManagementDetail: FC<ISelfPayManagementDetail> = ({ open, setOpen }) => {
	return (
		<>
			<OffCanvas isOpen={open} setOpen={setOpen}>
				<OffCanvasBody>
					<Card>
						<CardHeader>청구내역</CardHeader>
						<CardBody>
							<table>
								<thead>
									<tr>
										<td>청구연월</td>
										<td>청구액</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>청구내역</CardHeader>
						<CardBody>
							<table>
								<thead>
									<tr>
										<td>입출금유형</td>
										<td>입출금날짜</td>
										<td>종류</td>
										<td>입금금액</td>
										<td>출금금액</td>
										<td>입출금내용</td>
										<td>거래 후 잔액</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
				</OffCanvasBody>
			</OffCanvas>
		</>
	);
};

export default SelfPayManagementDetail;
