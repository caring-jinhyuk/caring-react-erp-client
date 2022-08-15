import { atom } from 'recoil';
import { Consult } from '../services/openApi';

export interface ConsultStateTypes {
	consult?: Consult | undefined;
	state: string | undefined;
	progress: string | undefined;
	search: string | undefined;
}

const consultState = atom<ConsultStateTypes>({
	key: 'consult',
	default: { consult: undefined, state: undefined, progress: undefined, search: undefined },
});

export { consultState };
