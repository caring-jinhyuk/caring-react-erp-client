import React, { FC } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/common/caring_main_logo.png';

interface ILogoProps {
	width?: number;
	height?: number;
}
const Logo: FC<ILogoProps> = ({ width, height }) => {
	const style = {
		width: width + 'px',
		height: height + 'px',
	};

	return (
		<div style={style}>
			<img
				src={logo}
				alt='logo'
				style={{
					maxWidth: 'max-content',
					width: '100%',
					height: '100%',
					verticalAlign: 'unset',
				}}></img>
		</div>
	);
};
Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};
Logo.defaultProps = {
	width: 2155,
	height: 854,
};

export default Logo;
