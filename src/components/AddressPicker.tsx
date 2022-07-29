import React, {
	Dispatch,
	FC,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import Input from './bootstrap/forms/Input';
import Dropdown from './bootstrap/Dropdown';
import Select from './bootstrap/forms/Select';
import { Route } from 'react-router-dom';
import {
	AdministrativeDivision,
	AdministrativeDivisionControllerService,
} from '../services/openApi';
import footers from '../routes/footerRoutes';
import PropTypes, { array } from 'prop-types';
import { FormikProps, FormikValues } from 'formik';
import functions from './icon/material-icons/Functions';
import FormGroup from './bootstrap/forms/FormGroup';
/**
 * 연도/월 정보를 가져오는 피커
 */
interface IAddressPicker {
	cityId: string;
	cityValue: string;
	wardId?: string;
	wardValue?: string;
	townId?: string;
	townValue?: string;
	onChange?(...args: unknown[]): unknown;
}

const AddressPicker: FC<IAddressPicker> = ({
	cityId,
	cityValue,
	wardId,
	wardValue,
	townId,
	townValue,
	onChange,
}) => {
	const cityList: string[] = [
		'경기',
		'서울',
		'부산',
		'인천',
		'경남',
		'대구',
		'경북',
		'충남',
		'대전',
		'광주',
		'전북',
		'울산',
		'충북',
		'전남',
		'강원',
		'제주',
		'세종',
	];
	const city: string[] = [
		'강원',
		'경기',
		'경남',
		'경북',
		'광주',
		'대구',
		'대전',
		'부산',
		'서울',
		'세종',
		'울산',
		'인천',
		'전남',
		'전북',
		'제주',
		'충남',
		'충북',
	];
	const gangwon: string[] = [
		'강릉시',
		'고성군',
		'동해시',
		'삼척시',
		'속초시',
		'양구군',
		'양양군',
		'영월군',
		'인제군',
		'원주시',
		'정선군',
		'철원군',
		'춘천시',
		'태백시',
		'평창군',
		'홍천군',
		'화천군',
		'횡성군',
	];
	const gyeonggi: string[] = [
		'가평군',
		'고양시 덕양구',
		'고양시 일산동구',
		'고양시 일산서구',
		'과천시',
		'광명시',
		'광주시',
		'구리시',
		'군포시',
		'김포시',
		'남양주시',
		'동두천시',
		'부천시',
		'성남시 수정구',
		'성남시 중원구',
		'성남시 분당구',
		'수원시 권선구',
		'수원시 장안구',
		'수원시 팔달구',
		'수원시 영통구',
		'시흥시',
		'안산시 상록구',
		'안산시 단원구',
		'안성시',
		'안양시 만안구',
		'안양시 동안구',
		'양주시',
		'양평군',
		'여주시',
		'연천군',
		'오산시',
		'용인시 처인구',
		'용인시 기흥구',
		'용인시 수지구',
		'의왕시',
		'의정부시',
		'이천시',
		'파주시',
		'평택시',
		'포천시',
		'하남시',
		'화성시',
	];
	const gyeongnam: string[] = [
		'거제시',
		'거창군',
		'고성군',
		'김해시',
		'남해군',
		'밀양시',
		'사천시',
		'산청군',
		'양산시',
		'의령군',
		'진주시',
		'창녕군',
		'창원시 의창구',
		'창원시 성산구',
		'창원시 마산합포구',
		'창원시 마산회원구',
		'창원시 진해구',
		'통영시',
		'하동군',
		'함안군',
		'함양군',
		'합천군',
	];
	const gyeongbuk: string[] = [
		'경산시',
		'경주시',
		'고령군',
		'구미시',
		'군위군',
		'김천시',
		'문경시',
		'봉화군',
		'상주시',
		'성주군',
		'안동시',
		'영덕군',
		'영양군',
		'영주시',
		'영천시',
		'예천군',
		'울릉군',
		'울진군',
		'의성군',
		'청도군',
		'청송군',
		'칠곡군',
		'포항시 북구',
		'포항시 남구',
	];
	const gwangju: string[] = ['광산구', '남구', '동구', '북구', '서구'];
	const daegu: string[] = ['남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'];
	const daejeon: string[] = ['대덕구', '동구', '서구', '유성구', '중구'];
	const busan: string[] = [
		'강서구',
		'금정구',
		'기장군',
		'남구',
		'동구',
		'동래구',
		'부산진구',
		'북구',
		'사상구',
		'사하구',
		'서구',
		'수영구',
		'연제구',
		'영도구',
		'중구',
		'해운대구',
	];
	const seoul: string[] = [
		'강남구',
		'강동구',
		'강북구',
		'강서구',
		'관악구',
		'광진구',
		'구로구',
		'금천구',
		'노원구',
		'도봉구',
		'동대문구',
		'동작구',
		'마포구',
		'서대문구',
		'서초구',
		'성동구',
		'성북구',
		'송파구',
		'양천구',
		'영등포구',
		'용산구',
		'은평구',
		'종로구',
		'중구',
		'중랑구',
	];
	const sejong: string[] = [
		'가람동',
		'고운동',
		'금남면',
		'나성동',
		'다정동',
		'대평동',
		'도담동',
		'반곡동',
		'보람동',
		'부강면',
		'산울동',
		'새롬동',
		'소담동',
		'소정면',
		'아름동',
		'어진동',
		'연기면',
		'연동면',
		'연서면',
		'장군면',
		'전동면',
		'전의면',
		'조치원읍',
		'종촌동',
		'한솔동',
		'합강동',
		'해밀동',
	];
	const incheon: string[] = [
		'강화군',
		'계양구',
		'남동구',
		'동구',
		'미추홀구',
		'부평구',
		'서구',
		'옹진군',
		'연수구',
		'중구',
	];
	const ulsan: string[] = ['남구', '동구', '북구', '울주군', '중구'];
	const chungbuk: string[] = [
		'괴산군',
		'단양군',
		'보은군',
		'영동군',
		'옥천군',
		'음성군',
		'증평군',
		'제천시',
		'청주시 상당구',
		'청주시 흥덕구',
		'청주시 청원구',
		'청주시 서원구',
		'충주시',
		'진천군',
	];
	const chungnam: string[] = [
		'금산군',
		'계룡시',
		'공주시',
		'논산시',
		'당진시',
		'보령시',
		'부여군',
		'서산시',
		'서천군',
		'아산시',
		'예산군',
		'천안시 동남구',
		'천안시 서북구',
		'청양군',
		'태안군',
		'홍성군',
	];
	const junbuk: string[] = [
		'고창군',
		'군산시',
		'김제시',
		'남원시',
		'무주군',
		'부안군',
		'순창군',
		'완주군',
		'익산시',
		'임실군',
		'장수군',
		'전주시 덕진구',
		'전주시 완산구',
		'정읍시',
		'진안군',
	];
	const junnam: string[] = [
		'강진군',
		'고흥군',
		'곡성군',
		'구례군',
		'광양시',
		'나주시',
		'담양군',
		'무안군',
		'목포시',
		'보성군',
		'순천시',
		'신안군',
		'여수시',
		'영광군',
		'영암군',
		'완도군',
		'장성군',
		'장흥군',
		'진도군',
		'함평군',
		'해남군',
		'화순군',
	];
	const jeju: string[] = ['서귀포시', '제주시'];

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const selectWardFromCity = (value: string) => {
		switch (value) {
			case '':
				return;
			case '강원':
				return gangwon;
			case '경기':
				return gyeonggi;
			case '경남':
				return gyeongnam;
			case '경북':
				return gyeongbuk;
			case '광주':
				return gwangju;
			case '대구':
				return daegu;
			case '대전':
				return daejeon;
			case '부산':
				return busan;
			case '서울':
				return seoul;
			case '세종':
				return sejong;
			case '울산':
				return ulsan;
			case '인천':
				return incheon;
			case '전남':
				return junnam;
			case '전북':
				return junbuk;
			case '제주':
				return jeju;
			case '충남':
				return chungnam;
			case '충북':
				return chungbuk;
		}
	};

	const cityRef = useRef<HTMLSelectElement>(null);
	const wardRef = useRef<HTMLSelectElement>(null);
	const [ward, setWard] = useState<string[]>();
	const [town, setTown] = useState<AdministrativeDivision[]>();

	const init = useCallback(() => {
		if (cityValue != null) {
			console.log('-------호출 cityValue------');
			setWard(selectWardFromCity(cityValue));
		}
		if (wardValue != null) {
			console.log('-------호출 wardValue------');
			AdministrativeDivisionControllerService.getAdministrativeDivisionUsingGet(
				cityRef.current!.value,
				wardRef.current!.value,
			)
				.then((divisions) => {
					setTown(divisions);
				})
				.catch((error) => {});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnChange = useCallback(
		(e: any) => {
			switch (e.target.id) {
				case cityId:
					setWard(selectWardFromCity(e.target.value));
					break;
				case wardId:
					AdministrativeDivisionControllerService.getAdministrativeDivisionUsingGet(
						cityRef.current!.value,
						wardRef.current!.value,
					)
						.then((divisions) => {
							setTown(divisions);
						})
						.catch((error) => {});
					break;
			}
		},
		[selectWardFromCity, cityId, wardId],
	);

	return (
		<>
			<FormGroup label={'시/도'}>
				<Select
					id={cityId}
					ref={cityRef}
					onChange={(e) => {
						handleOnChange(e);
						if (onChange) {
							onChange(e);
						}
					}}
					ariaLabel={'city'}
					value={cityValue}>
					{city.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</Select>
			</FormGroup>

			{wardId && (
				<FormGroup label={'시/군/구'}>
					<Select
						id={wardId}
						ref={wardRef}
						onChange={(e) => {
							handleOnChange(e);
							if (onChange) {
								onChange(e);
							}
						}}
						ariaLabel={'ward'}
						value={wardValue}>
						{ward &&
							ward.map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
					</Select>
				</FormGroup>
			)}

			{townId && (
				<FormGroup label={'읍/면/동'}>
					<Select
						id={townId}
						onChange={(e) => {
							handleOnChange(e);
							if (onChange) {
								onChange(e);
							}
						}}
						ariaLabel={'town'}
						value={townValue}>
						{town &&
							town.map((item) => (
								<option key={item.id} value={item.town}>
									{item.town}
								</option>
							))}
					</Select>
				</FormGroup>
			)}
		</>
	);
};

export default AddressPicker;
