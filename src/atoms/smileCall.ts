import { atom } from 'recoil';

export interface SearchBox {
	complete?: string;
	manager?: string;
	searchString?: string;
}

export const smileCallSearchState = atom({
	key: 'smileCallSearchState',
	default: { complete: '', manager: '', searchString: '' },
});
