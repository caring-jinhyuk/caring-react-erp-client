import { atom } from 'recoil';

const caregiversAtom = atom({
	key: 'caregivers',
	default: null,
});

export { caregiversAtom };
