import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/userSlice';
import { Redirect } from 'react-router-dom';
import store from '../../app/store';




const LoginPage = () => {
    const user = useSelector(selectUser);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [_login, setLogin] = useState(false);



    const state = store.getState();
    const userState = state.user.user;
    const isLoggedIn = userState._login;
    console.log(isLoggedIn)
    if (isLoggedIn){
        return <Redirect to='/'/>;
    }


    


    const flushState = () => {
        setMail('');;
        setPassword('');
    }





    const dispatch = useDispatch();


    const onSignIn = async() => {

        const URL = "/api/V1/sign-in"

        const setting = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                mail_id: mail,
                password: password
              })
        }
        const data = await fetch(URL, setting)
        .then((response) => response.json().then(data => ({
            data: data,
            status: response.status
        })))

        if(data.status === 200) {
            const responseData = data.data;
            const user_id = responseData.user_id;
            dispatch(
                login({
                    mail: mail,
                    user_id: user_id,
                    _login: true
                })
            );
            return <Redirect to='/'/>;

        }
        else {

        }
        flushState();



    }

    return (
        <>
        <div className="card w-50">
            <h5 className="card-header">SignIn</h5>
            <div className="card-body">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Mail Id</span>
                </div>
                <input
                name="mail" 
                type="mail"
                className='form-control'
                value={mail}
                onChange={(e) => setMail(e.target.value)} 
                />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                </div>
                <input 
                name="password"
                type="password"
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

                <button className='btn btn-outline-info' onClick={(e) => onSignIn()}>Login</button>
                {/* <button className='btn btn-outline-info'>Login</button> */}
                <h4>Login with Google Auth</h4>   
            </div>
        </div>
        
        </>
    )

}

export default LoginPage;
