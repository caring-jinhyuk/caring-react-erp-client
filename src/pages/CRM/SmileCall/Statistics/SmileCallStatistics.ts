//하드코딩 - 진행여부
import alert from '../../../../components/bootstrap/Alert';

export const selectCompleteItem: object[] = [
	{
		text: '전체',
		value: '전체',
	},
	{
		text: '예정',
		value: '예정',
	},
	{
		text: '부재 1회',
		value: '부재 1회',
	},
	{
		text: '부재 2회',
		value: '부재 2회',
	},
	{
		text: '거절',
		value: '거절',
	},
	{
		text: '완료',
		value: '완료',
	},
];

// 하드코딩 담당자
export const selectCounselorItem: string[] = [
	'임규경',
	'원효정',
	'김미가',
	'이수환',
	'김태석',
	'이가은',
	'김지은',
	'곽조아',
	'전담비',
	'최지은',
];

export const arrToOption = (arrOption: string[]) => {
	let obj: any[] = [];
	let objJson = { text: '전체', value: '전체' };
	arrOption.forEach((item) => {
		obj.push(objJson);
		objJson = { text: '', value: '' };
		objJson.text = item;
		objJson.value = item;
	});
	return obj;
};
