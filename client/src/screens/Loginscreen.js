import React, { useState, useEffect } from 'react';
import '../Login.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";


function Loginscreen() {

    const loginreducer = useSelector(state => state.loginReducer)
    const { loading, error } = loginreducer
    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");


    const dispatch = useDispatch()

    function login(e) {

        e.preventDefault()
        const user = {

            email: email,
            password: password
        }

        dispatch(loginUser(user))


    }

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/homescreen'
        }

    }, [])



    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="pic doesnt load for some reason prolly cause it aint http "
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                {error && (<Error error='Invalid Credentials' />)}
                {loading && (<Loader />)}

                <form onSubmit={login}>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        placeholder="email"
                        className="form-control"
                        value={email}
                        required
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control"
                        value={password}
                        required
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
        </div>
    )
}

export default Loginscreen



/**
                <Link to='/register'>
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>

                fix to send directly to amazon register screen
                
                */