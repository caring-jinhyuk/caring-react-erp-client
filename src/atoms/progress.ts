import { atom } from 'recoil';
import { v1 } from 'uuid';

export enum Progress {
	PROCEEDING,
	DONE,
}

const progressState = atom({
	key: `${v1()}`,
	default: Progress.DONE,
});

export { progressState };
