export interface ConsultSelectData {
	title: string;
	list: ConsultSelectMenu[];
}

export interface ConsultSelectMenu {
	text: string;
	value: string;
}

export const stateList: ConsultSelectMenu[] = [
	{ text: '전체', value: '' },
	{ text: '가족 : 1~4등급 O, 자격증 O', value: '가족 : 1~4등급 O, 자격증 O' },
	{ text: '가족 : 1~4등급 O, 자격증 X', value: '가족 : 1~4등급 O, 자격증 X' },
	{ text: '가족 : 5등급', value: '가족 : 5등급' },
	{ text: '가족 : 등급 신청 중', value: '가족 : 등급 신청 중' },
	{ text: '가족 : 단순 문의 / 인지', value: '가족 : 단순 문의 / 인지' },
	{ text: '일반 : 구인문의', value: '일반 : 구인문의' },
	{ text: '목욕 : 구인문의', value: '목욕 : 구인문의' },
	{ text: '입주 : 구인문의', value: '입주 : 구인문의' },
	{ text: '일반/목욕 : 구직문의', value: '일반/목욕 : 구직문의' },
	{ text: '일반 : 기매칭', value: '일반 : 기매칭' },
	{ text: '일반 : 입주요양 구인구직', value: '일반 : 입주요양 구인구직' },
	{ text: '복지용구', value: '복지용구' },
	{ text: '부재 / 통화요망', value: '부재 / 통화요망' },
	{ text: '홈페이지 예약', value: '홈페이지 예약' },
	{ text: '스마일콜', value: '스마일콜' },
	{ text: '기타 : 방문간호', value: '기타 : 방문간호' },
	{ text: '기타 : 자격증/교육원', value: '기타 : 자격증/교육원' },
	{ text: '기타 : 등급 신청 문의', value: '기타 : 등급 신청 문의' },
	{ text: '기타 : 등급 신청 대행', value: '기타 : 등급 신청 대행' },
	{ text: '기타 : 종료 / 기타 문의', value: '기타 : 종료 / 기타 문의' },
	{ text: '기타 : 무응답', value: '기타 : 무응답' },
	{ text: '간병 : 유형 미파악', value: '간병 : 유형 미파악' },
	{ text: '간병 : 구직 - 병원', value: '간병 : 구직 - 병원' },
	{ text: '간병 : 구직 - 입주', value: '간병 : 구직 - 입주' },
	{ text: '간병 : 구인 - 병원', value: '간병 : 구인 - 병원' },
	{ text: '간병 : 구인 - 입주', value: '간병 : 구인 - 입주' },
	{ text: 'VOC : 고객 단순 요청/문의', value: 'VOC : 고객 단순 요청/문의' },
	{ text: 'VOC : 고객 클레임', value: 'VOC : 고객 클레임' },
];

export const progressList: ConsultSelectMenu[] = [
	{ text: '전체', value: '전체' },
	{ text: '서류 받음', value: '서류 받음' },
	{ text: '서류 대기중', value: '서류 대기중' },
	{ text: '연락가능성 높음', value: '연락가능성 높음' },
	{ text: '연락가능성 낮음', value: '연락가능성 낮음' },
	{ text: '매칭 요청', value: '매칭 요청' },
	{ text: '기존 고객', value: '기존 고객' },
	{ text: '이탈 - 시작요청일 늦음', value: '이탈 - 시작요청일 늦음' },
	{ text: '이탈 - 급여 차이 적음', value: '이탈 - 급여 차이 적음' },
	{ text: '이탈 - 타 센터에서 잡음', value: '이탈 - 타 센터에서 잡음' },
	{ text: '이탈 - 기타', value: '이탈 - 기타' },
];

export const searchTypeList: ConsultSelectMenu[] = [
	{ text: '통합', value: '통합' },
	{ text: '지역', value: '지역' },
	{ text: '보호자', value: '보호자' },
	{ text: '대상자', value: '대상자' },
	{ text: '번호', value: '번호' },
	{ text: '현재상황', value: '현재상황' },
	{ text: '상담내용', value: '상담내용' },
];

export const counselors: ConsultSelectMenu[] = [
	{ text: '전체', value: '' },
	{ text: '임규경', value: '임규경' },
	{ text: '원효정', value: '원효정' },
	{ text: '김미가', value: '김미가' },
	{ text: '이수환', value: '이수환' },
	{ text: '김태석', value: '김태석' },
	{ text: '이가은', value: '이가은' },
	{ text: '김지은', value: '김지은' },
	{ text: '곽조아', value: '곽조아' },
	{ text: '전담비', value: '전담비' },
	{ text: '최지은', value: '최지은' },
];

export const consultSelectMenus: ConsultSelectData[] = [
	{ title: '상담유형', list: stateList },
	{ title: '진행상태', list: progressList },
];
