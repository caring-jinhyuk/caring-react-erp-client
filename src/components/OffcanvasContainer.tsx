import React from 'react';
import OffCanvas from './bootstrap/OffCanvas';
import { useRecoilState } from 'recoil';
import { offCanvasState } from '../atoms/offCanvas';

const OffCanvasContainer = () => {
	const [{ isOpen, children }, setOffCanvas] = useRecoilState(offCanvasState);

	return (
		<OffCanvas isOpen={isOpen} setOpen={setOffCanvas} isBackdrop={false}>
			{children ?? <></>}
		</OffCanvas>
	);
};

export default OffCanvasContainer;
