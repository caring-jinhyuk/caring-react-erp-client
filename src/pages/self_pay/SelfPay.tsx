import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';
import SubHeader, { SubHeaderLeft } from '../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import SelfPayList from './SelfPayList';

const SelfPay = () => {
	return (
		<PageWrapper title='SelfPay Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<SubHeader>
							<SubHeaderLeft>
								<ButtonGroup>
									<Button>본인 부담금 조회</Button>
									<Button>본인 부담금 납부 관리</Button>
								</ButtonGroup>
							</SubHeaderLeft>
						</SubHeader>
						<SelfPayList />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SelfPay;
