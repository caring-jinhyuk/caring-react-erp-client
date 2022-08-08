//하드코딩 - 진행여부
import { number } from 'prop-types';
export type CheckBoxItem = {
	text: string | undefined;
	value: string | number | undefined;
	label: string | undefined;
};

export const innerItemCompleteList: object[] = [
	{
		text: '전체',
		value: '',
		label: '',
	},
	{
		text: '예정',
		value: '예정',
		label: '',
	},
	{
		text: '부재 1회',
		value: '부재 1회',
		label: '',
	},
	{
		text: '부재 2회',
		value: '부재',
		label: '',
	},
	{
		text: '거절',
		value: '거절',
		label: '',
	},
	{
		text: '완료',
		value: '완료',
		label: '',
	},
];

// 하드코딩 담당자
export const innerItemCounselorList: object[] = [
	{
		text: '전체',
		value: '',
		label: '',
	},
	{
		text: '임규경',
		value: '임규경',
		label: '',
	},
	{
		text: '원효정',
		value: '원효정',
		label: '',
	},
	{
		text: '김미가',
		value: '김미가',
		label: '',
	},
	{
		text: '이수환',
		value: '이수환',
		label: '',
	},
	{
		text: '김태석',
		value: '김태석',
		label: '',
	},
	{
		text: '이가은',
		value: '이가은',
		label: '',
	},
	{
		text: '김지은',
		value: '김지은',
		label: '',
	},
	{
		text: '곽조아',
		value: '곽조아',
		label: '',
	},
	{
		text: '전담비',
		value: '전담비',
		label: '',
	},
	{
		text: '최지은',
		value: '최지은',
		label: '',
	},
];

//스마일콜 상세 - 하드코딩 모음
//현재상황
export const innerItemWorkNowList: object[] = [
	{
		text: '선택',
		value: '',
		label: '',
	},
	{
		text: '이용중',
		value: '이용중',
		label: '',
	},
	{
		text: '퇴사',
		value: '퇴사',
		label: '',
	},
];
//퇴사사유
export const innerItemResignationReasonList: object[] = [
	{
		text: '전체',
		value: '',
		label: '',
	},
	{
		text: '수급자 병원 입원',
		value: '수급자 병원 입원',
		label: '',
	},
	{
		text: '수급자 요양원 입소',
		value: '수급자 요양원 입소',
		label: '',
	},
	{
		text: '요보사 취업',
		value: '요보사 취업',
		label: '',
	},
	{
		text: '타센터 이동 (가족)',
		value: '타센터 이동 (가족)',
		label: '',
	},
	{
		text: '타센터 이동 (타급여)',
		value: '타센터 이동 (타급여)',
		label: '',
	},
	{
		text: '실업급여 수령',
		value: '실업급여 수령',
		label: '',
	},
	{
		text: '기타',
		value: '기타',
		label: '',
	},
];

//퇴사사유 일치 여부
export const innerItemOXList: object[] = [
	{
		text: '선택',
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
export const innerItemSmileWhyList: object[] = [
	{
		text: '선택',
		value: '',
		label: '',
	},
	{
		text: '높은 급여',
		value: '높은 급여',
		label: '',
	},
	{
		text: '광고 모델',
		value: '광고 모델',
		label: '',
	},
	{
		text: '비대면',
		value: '비대면',
		label: '',
	},
	{
		text: '지인 추천',
		value: '지인 추천',
		label: '',
	},
	{
		text: '전국적',
		value: '전국적',
		label: '',
	},
	{
		text: '믿음직스러움',
		value: '믿음직스러움',
		label: '',
	},
	{
		text: '상담이 좋아서',
		value: '상담이 좋아서',
		label: '',
	},
	{
		text: '기타',
		value: '기타',
		label: '',
	},
];

export const innerItemReactionList: CheckBoxItem[] = [
	{
		text: '긍정',
		value: 1,
		label: '',
	},
	{
		text: '부정',
		value: 0,
		label: '',
	},
	{
		text: '중립',
		value: 2,
		label: '',
	},
];
//좋은점
export const innerItemAdvantageList: object[] = [
	{
		text: '선택',
		value: '',
		label: '',
	},
	{
		text: '친절',
		value: '친절',
		label: '',
	},
	{
		text: '비대면',
		value: '비대면',
		label: '',
	},
	{
		text: '높은 급여',
		value: '높은 급여',
		label: '',
	},
	{
		text: '빠른 피드백',
		value: '빠른 피드백',
		label: '',
	},
	{
		text: '간편함',
		value: '간편함',
		label: '',
	},
	{
		text: '전문적',
		value: '전문적',
		label: '',
	},
	{
		text: '체계적',
		value: '체계적',
		label: '',
	},
	{
		text: '전국',
		value: '전국',
		label: '',
	},
	{
		text: '기타',
		value: '기타',
		label: '',
	},
];
//불편한점
export const innerItemDisadvantageList: object[] = [
	{
		text: '선택',
		value: '',
		label: '',
	},
	{
		text: '휴일 연락 불가',
		value: '휴일 연락 불가',
		label: '',
	},
	{
		text: '연락 느림',
		value: '연락 느림',
		label: '',
	},
	{
		text: '구인 늦음-일반',
		value: '구인 늦음-일반',
		label: '',
	},
	{
		text: '구인 늦음-목욕',
		value: '구인 늦음-목욕',
		label: '',
	},
	{
		text: '교류 부족',
		value: '교류 부족',
		label: '',
	},
	{
		text: '태그 어려움',
		value: '태그 어려움',
		label: '',
	},
	{
		text: '유도리 부족',
		value: '유도리 부족',
		label: '',
	},
	{
		text: '기타',
		value: '기타',
		label: '',
	},
];

export const arrToOption = (arrOption: string[], opt?: 'all' | 'select') => {
	let rtnArr: any[] = [];
	if (opt === 'all') rtnArr.push({ text: '전체', value: '', label: '전체' });
	if (opt === 'select') rtnArr.push({ text: '선택', value: '', label: '선택' });

	arrOption.forEach((item) => {
		rtnArr.push({ text: item, value: item, label: item });
	});

	return rtnArr;
};
