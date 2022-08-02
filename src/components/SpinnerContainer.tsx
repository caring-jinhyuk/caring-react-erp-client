import React from 'react';
import Spinner from './bootstrap/Spinner';

const SpinnerContainer = () => {
	return (
		<div className='spinner_container'>
			<Spinner color={'secondary'} size={100} className='spinner' />
		</div>
	);
};

export default SpinnerContainer;
