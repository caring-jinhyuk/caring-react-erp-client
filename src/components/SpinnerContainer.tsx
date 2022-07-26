import React from 'react';
import Spinner from './bootstrap/Spinner';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { progressState } from '../atoms/progress';

const SpinnerContainer = () => {
	const progress = useRecoilValue(progressState);

	return (
		<div
			className={classNames('spinner_container', {
				spinner_no_display: !!progress,
			})}>
			<Spinner color={'secondary'} size={100} className='spinner' />
		</div>
	);
};

export default SpinnerContainer;
