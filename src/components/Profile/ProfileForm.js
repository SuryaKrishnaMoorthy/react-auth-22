import { useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
	const passwordInputRef = useRef();
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC7B71F9xeXVGqxs7vdw_VEZu4w52LK_wo';
		
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				idToken: authCtx.token,
				password: passwordInputRef.current.value,
				returnSecureToken: false
			}),
			headers: {
				'Content-Type': 'application/json'
			}		
		}).then(res => {
			navigate('/', {replace: true});
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input type='password' id='new-password' ref={passwordInputRef} />
			</div> 
			<div className={classes.action}>
				<button>Change Password</button>
			</div> 
		</form> 
	);
};

export default ProfileForm;