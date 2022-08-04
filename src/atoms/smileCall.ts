import { atom } from 'recoil';
import { Smile } from '../services/openApi';

export interface SearchBox {
	complete?: string;
	manager?: string;
	searchString?: string;
}

export const searchBoxState = atom({
	key: 'searchBoxState',
	default: { complete: '', manager: '', searchString: '' },
});

export const smileCallInfo = atom({
	key: 'smileCallInfo',
	default: {} as Smile,
});
