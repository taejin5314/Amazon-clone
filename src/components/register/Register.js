import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { auth } from '../../firebase';

function Register() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordVerification, setPasswordVerification] = useState('');
    const [Disabled, setDisabled] = useState(true);

    const history = useHistory();

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(Email, Password)
            .then(function () {
                var user = auth.currentUser;
                user.updateProfile({
                    displayName: Name,
                })
                alert('Your account has been created successfully!')
                history.push('/login')
            })
            .catch(error => alert(error.message))
    }

    const renderFeedbackMessage = () => {
        return (
            <div style={{ fontSize: "12px", color: "red" }}><ErrorOutlineOutlinedIcon style={{ display: 'inline-flex', verticalAlign: 'bottom', fontSize: '14px', color: "red" }} /> Passwords must match</div>
        )
    }

    return (
        <div className="register">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png
                " alt=""
                />
            </Link>

            <div className="register__container">
                <h1>Create account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type="text" value={Name} onChange={e => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type="email" value={Email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />

                    <p className="register__passwordAlert">
                        <InfoOutlinedIcon style={{ display: 'inline-flex', verticalAlign: 'bottom', fontSize: '14px', color: "skyblue" }} /> Passwords must be at least 6 characters.
                    </p>

                    <h5>Re-enter password</h5>
                    <input type="password" value={PasswordVerification} onChange={e => setPasswordVerification(e.target.value)} />

                    {Password !== PasswordVerification && renderFeedbackMessage()}

                    {Password !== PasswordVerification ?
                        <button disabled={true} style={{}} className='register__createAccount'>Create your Amazon account</button>
                        : <button disabled={false} onClick={register} className='register__createAccount'>Create your Amazon account</button>}

                    <p>
                        By creating an account, you agree to Amazon Clone's <span>Conditions of Use</span> and <span>Privacy Notice</span>.
                    </p>

                    <div className="divider__inner"></div>

                    <p className="register__signIn">
                        Already have an account? <Link to='/login' style={{ textDecoration: "none" }}>Sign-In <ArrowRightIcon style={{ display: 'inline-flex', verticalAlign: 'middle', fontSize: '12px' }} /></Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Register;
