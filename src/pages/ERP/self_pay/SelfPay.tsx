import React, { useState } from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import SelfPayList from './SelfPayList';
import SelfPayManagement from './SelfPayManagement';

const SelfPay = () => {
	const [tabName, setTabName] = useState<string>('default');

	return (
		<PageWrapper title='SelfPay Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<SubHeader>
							<SubHeaderLeft>
								<ButtonGroup isToolbar={true}>
									<Button
										color={'dark'}
										isActive={'default' === tabName}
										onClick={() => setTabName('default')}>
										본인 부담금 조회
									</Button>
									<Button
										color={'dark'}
										isActive={'management' === tabName}
										onClick={() => setTabName('management')}>
										본인 부담금 납부 관리
									</Button>
								</ButtonGroup>
							</SubHeaderLeft>
						</SubHeader>
						{tabName === 'default' ? <SelfPayList /> : <SelfPayManagement />}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SelfPay;
