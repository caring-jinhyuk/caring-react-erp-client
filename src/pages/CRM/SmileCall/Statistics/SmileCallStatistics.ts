//하드코딩 - 진행여부
import alert from '../../../../components/bootstrap/Alert';
import { object } from 'prop-types';

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

//스마일콜 상세 - 하드코딩 모음
//현재상황
export const selectWorkNowItem: object[] = [
	{
		text: '',
		value: '',
	},
	{
		text: '이용중',
		value: '이용중',
	},
	{
		text: '퇴사',
		value: '퇴사',
	},
];
//퇴사사유
export const selectResignationReasonList: string[] = [
	'수급자 병원 입원',
	'수급자 요양원 입소',
	'요보사 취업',
	'타센터 이동 (가족)',
	'타센터 이동 (타급여)',
	'실업급여 수령',
	'기타',
];

//퇴사사유 일치 여부
export const selectOXItem: object[] = [
	{
		text: '',
		value: '',
	},
	{
		text: 'O',
		value: 'O',
	},
	{
		text: 'X',
		value: 'X',
	},
];

//선호이유
export const selectSmileWhyList: string[] = [
	'',
	'높은 급여',
	'광고 모델',
	'비대면',
	'지인 추천',
	'전국적',
	'믿음직스러움',
	'상담이 좋아서',
	'기타',
];

export const selectReactionItem: object[] = [
	{
		text: '긍정',
		value: '1',
	},
	{
		text: '부정',
		value: 'O',
	},
	{
		text: '중립',
		value: '2',
	},
];
//좋은점
export const selectAdvantagesList: string[] = [
	'친절',
	'비대면',
	'높은 급여',
	'빠른 피드백',
	'간편함',
	'전문적',
	'체계적',
	'전국',
	'기타',
];
//불편한점
export const selectDisadvantagesList: string[] = [
	'휴일 연락 불가',
	'연락 느림',
	'구인 늦음-일반',
	'구인 늦음-목욕',
	'교류 부족',
	'태그 어려움',
	'유도리 부족',
	'기타',
];

export const arrToOption = (arrOption: string[], opt?: 'all' | 'select') => {
	let rtnArr: any[] = [];
	if (opt === 'all') rtnArr.push({ text: '전체', value: '전체', label: '전체' });
	if (opt === 'select') rtnArr.push({ text: '선택', value: '', label: '선택' });

	arrOption.forEach((item) => {
		rtnArr.push({ text: item, value: item, label: item });
	});

	return rtnArr;
};
