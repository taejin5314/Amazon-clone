import { auth } from '../../firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'

function Login() {
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(Email, Password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png
                " alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type="submit" className='login__signInButton' >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the <strong style={{ color: "#1188BB" }}>AMAZON CLONE</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/register'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
