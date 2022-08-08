import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import Select from './bootstrap/forms/Select';
import {
	AdministrativeDivision,
	AdministrativeDivisionControllerService,
} from '../services/openApi';
import FormGroup from './bootstrap/forms/FormGroup';
import {
	BUSAN,
	CHUNGBUK,
	CHUNGNAM,
	CITY,
	DAEGEON,
	DAEGU,
	GANGWON,
	GWANGJU,
	GYENGBUK,
	GYENGGGI,
	GYENGNAM,
	INCHEON,
	JEJU,
	JUNBUK,
	JUNNAM,
	SEJONG,
	SEOUL,
	ULSAN,
} from '../constants/address';

/**
 * 연도/월 정보를 가져오는 피커
 */
type IAddressPicker = {
	cityId: string;
	cityValue?: string;
	wardId?: string;
	wardValue?: string;
	townId?: string;
	townValue?: string;
	onChange?(...args: unknown[]): unknown;
};

const AddressPicker: FC<IAddressPicker> = ({
	cityId,
	cityValue,
	wardId,
	wardValue,
	townId,
	townValue,
	onChange,
}) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const selectWardFromCity = (value: string) => {
		switch (value) {
			case '':
				return;
			case '강원':
				return GANGWON;
			case '경기':
				return GYENGGGI;
			case '경남':
				return GYENGNAM;
			case '경북':
				return GYENGBUK;
			case '광주':
				return GWANGJU;
			case '대구':
				return DAEGU;
			case '대전':
				return DAEGEON;
			case '부산':
				return BUSAN;
			case '서울':
				return SEOUL;
			case '세종':
				return SEJONG;
			case '울산':
				return ULSAN;
			case '인천':
				return INCHEON;
			case '전남':
				return JUNNAM;
			case '전북':
				return JUNBUK;
			case '제주':
				return JEJU;
			case '충남':
				return CHUNGNAM;
			case '충북':
				return CHUNGBUK;
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
			if (townId !== undefined) {
				AdministrativeDivisionControllerService.getAdministrativeDivisionUsingGet(
					cityRef.current!.value,
					wardRef.current!.value,
				)
					.then((divisions) => {
						setTown(divisions);
					})
					.catch((error) => {});
			}
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
			<div className='d-flex'>
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
						<option key={''}></option>
						{CITY.map((item) => (
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
							<option key={''}></option>
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
							<option key={''}></option>
							{town &&
								town.map((item) => (
									<option key={item.id} value={item.town}>
										{item.town}
									</option>
								))}
						</Select>
					</FormGroup>
				)}
			</div>
		</>
	);
};

export default AddressPicker;
