import React, { FC } from 'react';
import CaregiverDetail from './CaregiverDetail';
import { v1 } from 'uuid';
import { Caregiver } from '../../../../services/openApi';
import { useRecoilState } from 'recoil';
import { offCanvasState } from '../../../../atoms/offCanvas';

type CaregiverTableRowProps = {
	caregiver: Caregiver;
};

const CaregiverTableRow: FC<CaregiverTableRowProps> = ({ caregiver }) => {
	const [offCanvas, setOffCanvas] = useRecoilState(offCanvasState);
	const onClickHandler = () => {
		let offCanvasElement = <CaregiverDetail key={v1()} caregiver={caregiver} />;

		if (offCanvas.isOpen) {
			setOffCanvas({ ...offCanvas, children: offCanvasElement });
			return;
		}
		setOffCanvas({ isOpen: true, children: offCanvasElement });
	};

	return (
		<>
			<tr onClick={onClickHandler}>
				<td>{caregiver.name}</td>
				<td>{caregiver.city}</td>
				<td>{caregiver.ward}</td>
				<td>{caregiver.town}</td>
				<td>{caregiver.hopeArea}</td>
				<td>{caregiver.phone}</td>
			</tr>
		</>
	);
};

export default CaregiverTableRow;
