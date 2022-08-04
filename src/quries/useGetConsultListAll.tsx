import { useQuery } from '@tanstack/react-query';
import { ConsultControllerService } from '../services/openApi';
import moment from 'moment';
import CallStatistics from '../pages/CRM/Statistics/components/CallStatistics';

export const useGetConsultAllList = (from: Date, to: Date) => {
	const result = useQuery(
		['consultListAll', { from, to }],
		async () => getCaregiverAllList(from, to),
		{
			cacheTime: Infinity,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverAllList = async (from: Date, to: Date) => {
	const response = await ConsultControllerService.getConsultAllListUsingGet(
		moment(from).format('YYYY-MM-DD'),
		moment(to).add(1, 'day').format('YYYY-MM-DD'),
	);
	const inflowList: string[] = [
		'TV광고',
		'유튜브',
		'인터넷(검색/뉴스 등)',
		'인터넷(블로그)',
		'인터넷(지식in)',
		'지인 소개',
		'홈페이지(pc)',
		'홈페이지(mo)',
		'전단지',
		'페이스북',
		'인스타',
		'라디오',
		'캐시워크',
		'케어랩스 DB',
		'나머지',
	];
	const stateList: string[] = [
		'가족 : 1~4등급 O, 자격증 O',
		'가족 : 1~4등급 O, 자격증 X',
		'가족 : 5등급',
		'가족 : 등급 신청 중',
		'가족 : 단순 문의 / 인지',
		'일반 : 구인문의',
		'목욕 : 구인문의',
		'입주 : 구인문의',
		'일반/목욕 : 구직문의',
		'일반 : 기매칭',
		'일반 : 입주요양 구인구직',
		'복지용구',
		'부재 / 통화요망',
		'홈페이지 예약',
		'스마일콜',
		'기타 : 방문간호',
		'기타 : 자격증/교육원',
		'기타 : 등급 신청 문의',
		'기타 : 등급 신청 대행',
		'기타 : 종료 / 기타 문의',
		'기타 : 무응답',
		'간병 : 유형 미파악',
		'간병 : 구직 - 병원',
		'간병 : 구직 - 입주',
		'간병 : 구인 - 병원',
		'간병 : 구인 - 입주',
		'VOC : 고객 단순 요청/문의',
		'VOC : 고객 클레임',
	];
	const cityList: string[] = [
		'경기',
		'서울',
		'부산',
		'인천',
		'경남',
		'대구',
		'경북',
		'대전',
		'전북',
		'전남',
		'충남',
		'광주',
		'강원',
		'충북',
		'울산',
		'제주',
		'세종',
	];
	const progressList: string[] = [
		'서류 받음',
		'서류 대기중',
		'연락가능성 높음',
		'연락가능성 낮음',
		'매칭 요청',
		'기존 고객',
		'이탈 - 시작요청일 늦음',
		'이탈 - 급여 차이 적음',
		'이탈 - 타 센터에서 잡음',
		'이탈 - 기타',
	];

	const whyList: string[] = [
		'높은 급여',
		'정동원 / 장민호 팬',
		'지인 추천',
		'일자리가 더 많을 것 같아서',
		'요양보호사 권익 생각해줘서',
		'유튜브 설명 좋아서',
		'티비에 나와서',
		'전국적이라서',
		'체계적이라서',
		'등급 대행 해줄 줄 알고',
		'기타',
	];
	const addInquiryList: string[] = [
		'이용X',
		'가족요양',
		'방문요양',
		'방문목욕',
		'방문간호',
		'주야간',
		'기타',
	];
	const counselors: string[] = [
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

	let calls = 0;
	let recalls = 0;
	let recallsService = 0;
	let choiceReasonEtc = '';
	let addInquiryEtc = '';
	let create: Date;
	const now: string = moment().format('YY-MM-DD');
	const today: string = new Date().toISOString().substring(0, 10);

	const cityCall: number[] = Array.from({ length: cityList.length }, () => 0);
	const itemCall: Array<number> = new Array(inflowList.length).fill(0);
	const itemService: Array<number> = new Array(inflowList.length).fill(0);
	const stateCall: number[] = Array.from({ length: stateList.length }, () => 0);
	const cityVisitHopeCall: number[] = Array.from({ length: cityList.length }, () => 0);
	const experienceCheckList: number[][] = Array(5)
		.fill(0)
		.map((x) => Array(3).fill(0));
	const progressCheckList: number[][] = Array(2)
		.fill(0)
		.map((x) => Array(progressList.length + 1).fill(0));
	const choiceReasonCall: number[] = Array.from({ length: whyList.length }, () => 0);
	const addInquiryCall = Array.from({ length: addInquiryList.length }, () => 0);
	const counselorsCall = Array.from({ length: counselors.length }, () => 0);

	const todayCallClick: boolean[] = [true, false, false];

	let todayPerson: number = 0;
	let todayCall: number = 0;
	let todayNewCall: number = 0;
	let todayRecall: number = 0;

	for (let i = 0; i < response.length; i++) {
		if (response[i] != null) {
			calls++;

			switch (response[i].come) {
				case inflowList[0]:
					itemCall[0]++;
					if (response[i].progress === '기존 고객') {
						itemService[0]++;
					}
					break;
				case inflowList[1]:
					itemCall[1]++;
					if (response[i].progress === '기존 고객') {
						itemService[1]++;
					}
					break;
				case inflowList[2]:
					itemCall[2]++;
					if (response[i].progress === '기존 고객') {
						itemService[2]++;
					}
					break;
				case inflowList[3]:
					itemCall[3]++;
					if (response[i].progress === '기존 고객') {
						itemService[3]++;
					}
					break;
				case inflowList[4]:
					itemCall[4]++;
					if (response[i].progress === '기존 고객') {
						itemService[4]++;
					}
					break;
				case inflowList[5]:
					itemCall[5]++;
					if (response[i].progress === '기존 고객') {
						itemService[5]++;
					}
					break;
				case inflowList[6]:
					itemCall[6]++;
					if (response[i].progress === '기존 고객') {
						itemService[6]++;
					}
					break;
				case inflowList[7]:
					itemCall[7]++;
					if (response[i].progress === '기존 고객') {
						itemService[7]++;
					}
					break;
				case inflowList[8]:
					itemCall[8]++;
					if (response[i].progress === '기존 고객') {
						itemService[8]++;
					}
					break;
				case inflowList[9]:
					itemCall[9]++;
					if (response[i].progress === '기존 고객') {
						itemService[9]++;
					}
					break;
				case inflowList[10]:
					itemCall[10]++;
					if (response[i].progress === '기존 고객') {
						itemService[10]++;
					}
					break;
				case inflowList[11]:
					itemCall[11]++;
					if (response[i].progress === '기존 고객') {
						itemService[11]++;
					}
					break;
				case inflowList[12]:
					itemCall[12]++;
					if (response[i].progress === '기존 고객') {
						itemService[12]++;
					}
					break;
				case inflowList[13]:
					itemCall[13]++;
					if (response[i].progress === '기존 고객') {
						itemService[13]++;
					}
					break;
				default:
					itemCall[14]++;
					if (response[i].progress === '기존 고객') {
						itemService[14]++;
					}
					break;
			}

			for (let y = 0; y < cityCall.length; y++) {
				if (response[i].city == cityList[y]) {
					cityCall[y]++;
					if (response[i].visitHope == 'O') {
						cityVisitHopeCall[y]++;
					}
					break;
				} else if (y == cityCall.length - 1) {
					cityCall[y]++;
				}
			}

			for (let count = 0; count < stateList.length; count++) {
				if (response[i].state == stateList[count]) {
					stateCall[count]++;
					if (count == 0) {
						if (
							response[i].memo?.includes('가족요양중') ||
							response[i].memo?.includes('가족 요양중') ||
							response[i].memo?.includes('가족요양 중') ||
							response[i].memo?.includes('가족 요양 중') ||
							response[i].memo?.includes('이관') ||
							response[i].experience == '이관'
						) {
							experienceCheckList[0][0]++;
						} else if (
							response[i].memo?.includes('처음') ||
							response[i].memo?.includes('신규') ||
							response[i].experience == '신규'
						) {
							experienceCheckList[0][1]++;
						} else {
							experienceCheckList[0][2]++;
						}
					} else if (count == 5) {
						if (
							response[i].memo?.includes('가족요양중') ||
							response[i].memo?.includes('가족 요양중') ||
							response[i].memo?.includes('가족요양 중') ||
							response[i].memo?.includes('가족 요양 중') ||
							response[i].memo?.includes('이관') ||
							response[i].experience == '이관'
						) {
							experienceCheckList[1][0]++;
						} else if (
							response[i].memo?.includes('처음') ||
							response[i].memo?.includes('신규') ||
							response[i].experience == '신규'
						) {
							experienceCheckList[1][1]++;
						} else {
							experienceCheckList[1][2]++;
						}
					}
					break;
				}
			}

			if (response[i].progress != '' && response[i].progress != null) {
				for (let count = 0; count < progressList.length; count++) {
					if (response[i].progress == progressList[count]) {
						progressCheckList[0][count]++;
					}
				}
			} else if (response[i].progress == '') {
				progressCheckList[0][progressList.length]++;
			}

			if (response[i].why != '' && response[i].why != null) {
				for (let count = 0; count < whyList.length; count++) {
					if (response[i].why?.includes(whyList[count])) {
						choiceReasonCall[count]++;
					}
				}
				if (response[i].why != null) {
					// response[i].why
					// 	?.split(',')
					// 	.filter((x) => !whyList.includes(x))
					// 	.forEach((item) => {
					// 		choiceReasonCall[whyList.length - 1]++;
					// 		choiceReasonEtc += item + ', ';
					// 	});
				}
			}

			if (response[i].addInquiry != '' && response[i].addInquiry != null) {
				for (let count = 0; count < addInquiryList.length; count++) {
					if (response[i].addInquiry?.includes(addInquiryList[count])) {
						addInquiryCall[count]++;
					}
				}
				if (response[i].addInquiry != null) {
					// response[i].addInquiry
					// 	?.split(',')
					// 	.filter((x) => !addInquiryList.includes(x))
					// 	.forEach((item) => {
					// 		addInquiryCall[addInquiryList.length - 1]++;
					// 		addInquiryEtc += item + ', ';
					// 	});
				}
			}

			if (response[i].first != null && response[i].first != '') {
				for (let count = 0; count < counselors.length; count++) {
					if (response[i].first == counselors[count]) {
						counselorsCall[count]++;
						break;
					}
				}
			}

			if (response[i].memo != null && response[i].memo != '') {
				for (let count = 0; count < counselors.length; count++) {
					let counselor = new RegExp(counselors[count], 'g');
					if (response[i].memo?.search(counselors[count]) !== -1) {
						counselorsCall[count] += (response[i].memo?.match(counselor) || []).length;
						recalls++;
						if (response[i].progress === '기존 고객') {
							recallsService++;
						}
					}
				}
			}
			//
			if (response[i].lastModifiedDate != null && response[i].lastModifiedDate != '') {
				create = new Date(response[i].createdAt!);
				// 	// days = '22-07-01/'
				// 	// for(let minute=0; minute<160; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<145; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times1).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people1++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<142; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times2).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people2++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<150; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times3).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people3++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<150; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times4).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people4++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<130; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times5).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people5++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// for(let minute=0; minute<150; minute++){
				// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
				// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times6).add(minute, 'minute').format('HH:mm') + ')')){
				// 	//       people6++;
				// 	//     }
				// 	//   }
				// 	// }
				// 	// minute++;
				// 	// console.log(minute);
				if (response[i].memo != null && response[i].memo?.includes(now)) {
					if (create.toISOString().substring(0, 10) === today) {
						todayNewCall++;
						if (!todayCallClick[2]) {
							//this.today_statistics(data[i]);
						}
					} else {
						todayNewCall++;
						if (!todayCallClick[1]) {
							//this.today_statistics(data[i]);
						}
					}
					// 	}
					// }
				}
			}
		}
	}

	const callStatistic: CallStatistic = {
		calls,
		recallsService,
		inflowList,
		cityCall,
		itemCall,
		itemService,
		stateCall,
		cityVisitHopeCall,
		experienceCheckList,
		cityList,
		stateList,
		whyList,
		choiceReasonCall,
		addInquiryList,
		addInquiryCall,
		counselors,
		counselorsCall,
	};

	return callStatistic;
};

export type CallStatistic = {
	calls: number;
	recallsService: number;
	inflowList: string[];
	cityCall: number[];
	itemCall: number[];
	itemService: number[];
	stateCall: number[];
	cityVisitHopeCall: number[];
	experienceCheckList: number[][];
	cityList: string[];
	stateList: string[];
	whyList: string[];
	choiceReasonCall: number[];
	addInquiryList: string[];
	addInquiryCall: number[];
	counselors: string[];
	counselorsCall: number[];
};
