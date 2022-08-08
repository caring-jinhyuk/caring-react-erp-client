import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SmileCallSearchBox from './components/SmileCallSearchBox';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import SmileCallList from './components/SmileCallList';
import Button from '../../../components/bootstrap/Button';

const SmileCall = () => {
	return (
		<PageWrapper title='SmileCall Page'>
			<Page>
				<Card stretch>
					<CardHeader borderSize={1}>
						<CardLabel icon='Info' iconColor='secondary'>
							<CardTitle>스마일콜</CardTitle> {/* 여기서 파라메터를 전달해줄수 있음 */}
						</CardLabel>
					</CardHeader>
					<CardBody>
						<SmileCallSearchBox />
						<SmileCallList />
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default SmileCall;
