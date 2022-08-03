import React, { FC, useCallback, useState } from 'react';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import { useSetRecoilState } from 'recoil';
import { signUpState, SignUpValidates } from '../../../atoms/signUp';
import { User, UserControllerService } from '../../../services/openApi';
import showNotification from '../../../components/extras/showNotification';
import { Progress, progressState } from '../../../atoms/progress';

interface ISignUpProps {
	setIsNewUser: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const SignUpForm: FC<ISignUpProps> = ({ setIsNewUser }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirm, setConfirm] = useState<string>('');

	const setProgress = useSetRecoilState(progressState);
	const setCurrent = useSetRecoilState(signUpState);

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'signUp-email':
				setEmail(e.target.value);
				break;
			case 'signUp-password':
				setPassword(e.target.value);
				break;
			case 'signUp-confirm':
				setConfirm(e.target.value);
				break;
		}
	}, []);

	const handleOnSubmit = async (event: any) => {
		event.preventDefault();

		if (password !== confirm) {
			setCurrent(SignUpValidates.PASSWORD);
			return;
		}

		setProgress(Progress.PROCEEDING);
		await signUpHandler();
		setProgress(Progress.DONE);
	};

	const signUpHandler = async () => {
		const newUser: User = { email, password };
		const response = await UserControllerService.registerUsingPost(newUser);

		if (typeof response === 'string') {
			if (response === 'AlreadyExists') {
				setCurrent(SignUpValidates.EXISTS);
			} else {
				setCurrent(SignUpValidates.PASSWORD_RULES);
			}
			return;
		}
		showNotification('회원가입 완료 !', '생성하신 계정으로 로그인해주세요.', 'success');
		setCurrent(SignUpValidates.DEFAULT);
		setIsNewUser(false);
	};

	return (
		<>
			<form className='row g-4' onSubmit={handleOnSubmit}>
				<div className='col-12'>
					<FormGroup id='signUp-email' isFloating={true} label='이메일 주소 입력'>
						<Input
							type='email'
							value={email}
							onChange={handleOnChange}
							className='input-focus'
							autoComplete={'username'}
							required={true}
						/>
					</FormGroup>
				</div>
				<div className='col-12'>
					<FormGroup id='signUp-password' isFloating={true} label='비밀번호 입력'>
						<Input
							type='password'
							value={password}
							onChange={handleOnChange}
							className='input-focus'
							autoComplete={'new-password'}
							required={true}
						/>
					</FormGroup>
				</div>
				<div className='col-12'>
					<FormGroup id='signUp-confirm' isFloating={true} label='비밀번호 확인'>
						<Input
							type='password'
							value={confirm}
							className='input-focus'
							onChange={handleOnChange}
							autoComplete={'new-password'}
							required={true}
						/>
					</FormGroup>
				</div>
				<div className='col-12'>
					<Button color='primary' className='w-100 py-3' type='submit'>
						가입하기
					</Button>
				</div>
			</form>
		</>
	);
};

export default SignUpForm;
