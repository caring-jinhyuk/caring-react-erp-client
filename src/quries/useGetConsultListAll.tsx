import { useQuery } from '@tanstack/react-query';
import { ConsultControllerService } from '../services/openApi';

export const useGetConsultAllList = () => {
	const result = useQuery(['consultListAll'], async () => getCaregiverAllList(), {
		cacheTime: 50000,
		staleTime: 50000,
	});
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverAllList = async () => {
	const response = await ConsultControllerService.getConsultAllListUsingGet();
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

	let calls = 0;
	let recalls = 0;
	let recallsService = 0;

	const cityCall: number[] = Array.from({ length: cityList.length }, () => 0);
	const itemCall: Array<number> = new Array(inflowList.length).fill(0);
	const itemService: Array<number> = new Array(inflowList.length).fill(0);
	const stateCall: number[] = Array.from({ length: stateList.length }, () => 0);
	const cityVisitHopeCall: number[] = Array.from({ length: cityList.length }, () => 0);
	const experienceCheckList: number[][] = Array(5)
		.fill(0)
		.map((x) => Array(3).fill(0));

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

			// if (data[i].progress != '' && data[i].progress != null) {
			// 	for (let count = 0; count < this.progress_list.length; count++) {
			// 		if (data[i].progress == this.progress_list[count]) {
			// 			this.progress_check_list[0][count]++;
			// 		}
			// 	}
			// } else if (data[i].progress == '') {
			// 	this.progress_check_list[0][this.progress_list.length]++;
			// }
			//
			// if (data[i].why != '' && data[i].why != null) {
			// 	for (let count = 0; count < this.why_list.length; count++) {
			// 		if (data[i].why.includes(this.why_list[count])) {
			// 			this.choice_reason_call[count]++;
			// 		}
			// 	}
			// 	data[i].why
			// 		.split(',')
			// 		.filter((x) => !this.why_list.includes(x))
			// 		.forEach((item) => {
			// 			this.choice_reason_call[this.why_list.length - 1]++;
			// 			this.choice_reason_etc += item + ', ';
			// 		});
			// }
			//
			// if (data[i].addInquiry != '' && data[i].addInquiry != null) {
			// 	for (let count = 0; count < this.addInquiry_list.length; count++) {
			// 		if (data[i].addInquiry.includes(this.addInquiry_list[count])) {
			// 			this.addInquiry_call[count]++;
			// 		}
			// 	}
			// 	data[i].addInquiry
			// 		.split(',')
			// 		.filter((x) => !this.addInquiry_list.includes(x))
			// 		.forEach((item) => {
			// 			this.addInquiry_call[this.addInquiry_list.length - 1]++;
			// 			this.addInquiry_etc += item + ', ';
			// 		});
			// }
			//
			// if (data[i].first != null && data[i].first != '') {
			// 	for (let count = 0; count < this.counselors.length; count++) {
			// 		if (data[i].first == this.counselors[count]) {
			// 			this.counselors_call[count]++;
			// 			break;
			// 		}
			// 	}
			// }
			//
			//
			// if (data[i].memo != null && data[i].memo != '') {
			// 	for (let count = 0; count < this.counselors.length; count++) {
			// 		let counselor = new RegExp(this.counselors[count], 'g');
			// 		if (data[i].memo.search(this.counselors[count]) !== -1) {
			// 			this.counselors_call[count] += (data[i].memo.match(counselor) || []).length;
			// 			this.recalls++;
			// 			if (data[i].progress === '기존 고객') {
			// 				this.recalls_service++;
			// 			}
			// 		}
			// 	}
			// }
			//
			// if (data[i].lastModifiedDate != null && data[i].lastModifiedDate != '') {
			// 	create = new Date(data[i].createdAt);
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
			// 	if (data[i].memo != null && data[i].memo.includes(this.now)) {
			// 		if (create.toISOString().substring(0, 10) === this.today) {
			// 			this.today_newcall++;
			// 			if (this.today_call_click[2] != true) {
			// 				this.today_statistics(data[i]);
			// 			}
			// 		} else {
			// 			this.today_recall++;
			// 			if (this.today_call_click[1] != true) {
			// 				this.today_statistics(data[i]);
			// 			}
			// 		}
			// 	}
			// }
		}
	}

	return {
		calls: calls,
		recallsService: recallsService,
		inflowList: inflowList,
		cityCall: cityCall,
		itemCall: itemCall,
		itemService: itemService,
		stateCall: stateCall,
		cityVisitHopeCall: cityVisitHopeCall,
		experienceCheckList: experienceCheckList,
	};
};
