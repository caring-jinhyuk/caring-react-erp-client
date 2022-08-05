import { atom } from 'recoil';

export interface SearchBox {
	complete?: string;
	manager?: string;
	searchString?: string;
}

export const searchBoxState = atom({
	key: 'searchBoxState',
	default: { complete: '', manager: '', searchString: '' },
});
