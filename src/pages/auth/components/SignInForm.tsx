import React, { FC, useCallback, useState } from 'react';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import { UserControllerService } from '../../../services/openApi';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../atoms/user';
import { signInState, SignInValidates } from '../../../atoms/signIn';
import { Progress, progressState } from '../../../atoms/progress';

const SignInForm: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const setUser = useSetRecoilState(userState);
	const setCurrent = useSetRecoilState(signInState);
	const setProgress = useSetRecoilState(progressState);

	const navigate = useNavigate();

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'signIn-email':
				setEmail(e.target.value);
				break;
			case 'signIn-password':
				setPassword(e.target.value);
				break;
		}
	}, []);

	const handleOnSubmit = async (event: any) => {
		event.preventDefault();

		setProgress(Progress.PROCEEDING);
		await signInHandler();
		setProgress(Progress.DONE);
	};

	const signInHandler = async () => {
		const response = await UserControllerService.loginUsingPost({ email, password });
		switch (response) {
			case '패스워드가 다릅니다.':
				setCurrent(SignInValidates.PASSWORD);
				break;
			case '가입하지 않은 이메일입니다.':
				setCurrent(SignInValidates.NON_ACCOUNT);
				break;
			default:
				setUser({ response });
				navigate('/');
				break;
		}
	};

	return (
		<>
			<form className='row g-4' onSubmit={handleOnSubmit}>
				<div className='col-12'>
					<FormGroup id='signIn-email' className='mb-3' isFloating={true} label='이메일 주소 입력'>
						<Input
							// type='email'
							value={email}
							onChange={handleOnChange}
							className='input-focus'
							autoFocus={true}
							autoComplete='username'
							required={true}
						/>
					</FormGroup>
					<FormGroup id='signIn-password' isFloating={true} label='비밀번호 입력'>
						<Input
							type='password'
							value={password}
							onChange={handleOnChange}
							className='input-focus'
							autoComplete='current-password'
							required={true}
						/>
					</FormGroup>
				</div>
				<div className='col-12'>
					<Button className='w-100 py-3' color='secondary' type='submit'>
						로그인
					</Button>
				</div>
			</form>
		</>
	);
};

export default SignInForm;
