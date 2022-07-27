import React, { useCallback, useState } from 'react';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import { User, UserControllerService } from '../../../services/openApi';

const SignInForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

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

	const handleOnSubmit = (event: any) => {
		event.preventDefault();
		signInHandler();
	};

	const signInHandler = async () => {
		let user: User = { email, password };
		UserControllerService.loginUsingPost(user).then((a: any) => {
			console.log(a);
		});
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
							autoComplete='email'
							required={true}
						/>
					</FormGroup>
					<FormGroup id='signIn-password' isFloating={true} label='비밀번호 입력'>
						<Input
							type='password'
							value={password}
							onChange={handleOnChange}
							className='input-focus'
							autoComplete='password'
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
