import { atom } from 'recoil';
import { ReactNode } from 'react';

export interface OffCanvasTypes {
	isOpen: boolean;
	children?: ReactNode | string | undefined;
}

export const offCanvasState = atom<OffCanvasTypes>({
	key: 'offCanvasState',
	default: {
		isOpen: false,
		children: '<></>',
	},
});
