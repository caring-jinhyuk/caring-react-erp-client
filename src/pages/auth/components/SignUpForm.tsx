import React, { FC, useCallback, useState } from 'react';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';

interface ISignUpProps {
	setInvalid: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const SignUpForm: FC<ISignUpProps> = ({ setInvalid }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirm, setConfirm] = useState<string>('');

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

	const handleOnSubmit = (event: any) => {
		event.preventDefault();

		if (password !== confirm) {
			setInvalid(true);
			return;
		}
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
							autoComplete='email'
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
							autoComplete='password'
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
							required={true}
						/>
					</FormGroup>
				</div>
				<div className='col-12'>
					<Button color='secondary' className='w-100 py-3' type='submit'>
						가입하기
					</Button>
				</div>
			</form>
		</>
	);
};

export default SignUpForm;
