import { atom } from 'recoil';

const recipientsAtom = atom({
	key: 'recipients',
	default: null,
});

export { recipientsAtom };
