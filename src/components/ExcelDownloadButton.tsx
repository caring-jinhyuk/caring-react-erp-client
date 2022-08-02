import React, { FC } from 'react';
import Button from './bootstrap/Button';
import PropTypes from 'prop-types';
import { excelDownload } from '../utils/XlsxUtils';

interface IExcelDownloadButton {
	buttonName: string;
	fileName: string;
	data: any[][];
}
/**
	ExcelDownload 버튼 (임시로 만들어봄)
 */
const ExcelDownloadButton: FC<IExcelDownloadButton> = ({ buttonName, fileName, data }) => {
	const buttonClick = () => {
		excelDownload(fileName, data);
	};

	return <Button color={'primary'} onClick={buttonClick}>{`${buttonName} 다운로드`}</Button>;
};

ExcelDownloadButton.propTypes = {
	buttonName: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired,
	data: PropTypes.any.isRequired,
};

export default ExcelDownloadButton;
