import React, { FC } from 'react';
import Badge from '../../../../components/bootstrap/Badge';
import Select from '../../../../components/bootstrap/forms/Select';
import { stateList } from '../../Consult/statics/consultSelectMenus';
import Button from '../../../../components/bootstrap/Button';
import { OffCanvasHeader } from '../../../../components/bootstrap/OffCanvas';
import { Consult } from '../../../../services/openApi';
import { useSetRecoilState } from 'recoil';
import { offCanvasState } from '../../../../atoms/offCanvas';

interface ConsultDetailHeaderProps {
	consult: Consult;
	isModify: boolean;
	setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConsultDetailHeader: FC<ConsultDetailHeaderProps> = ({ consult, isModify, setIsModify }) => {
	const setOffCanvas = useSetRecoilState(offCanvasState);

	const handleOnClick = () => {
		setIsModify(!isModify);
	};

	const handleOnChange = () => {};

	return (
		<OffCanvasHeader className={'d-flex justify-content-between'}>
			<div className={'d-flex align-items-center'}>
				<Badge id={'title'} color='dark' className={'title_phone bg-white'}>
					{consult.phone} 님
				</Badge>
				<Select
					ariaLabel={'상담유형'}
					list={stateList}
					value={consult.state}
					onChange={handleOnChange}
					disabled={!isModify}></Select>
			</div>
			<div>
				<Button
					icon={isModify ? 'modify' : 'save'}
					onClick={handleOnClick}
					color='primary'
					type='button'>
					{isModify ? '저장하기' : '수정하기'}
				</Button>
				<Button
					onClick={() => setOffCanvas({ isOpen: false })}
					className='btn-unset'
					size='lg'
					color='dark'
					icon='close'
					isLink
				/>
			</div>
		</OffCanvasHeader>
	);
};

export default ConsultDetailHeader;
