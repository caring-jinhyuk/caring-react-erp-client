import { TextValueObject } from '../../../../models/TextValueObject';

export enum CallType {
	TODAY = 'TODAY',
	NEW = 'NEW',
	RE = 'RE',
}
export const CALL_TYPE_SELECT: TextValueObject<CallType>[] = [
	{
		text: '오늘 콜',
		value: CallType.TODAY,
	},
	{
		text: '신규 콜',
		value: CallType.NEW,
	},
	{
		text: '리 콜',
		value: CallType.RE,
	},
];

export const enum GraphType {
	TABLE,
	BAR,
}
