import React, { useState } from 'react'

// Put Toast on successful creation of account to user





const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')


    const flushState = () => {
        setName('');
        setMail('');
        setPassword('');
        setPhoneNumber('')
    }


    const signup = async() => {
        

    const URL = "/api/V1/signup"
        const setting = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: name,
                mail_id: mail,
                phone_number: phoneNumber,
                password: password,
              })
        }
        const data = await fetch(URL, setting)
        .then((response) => response.json().then(data => ({
            data: data,
            status: response.status
        })))
        flushState();

        if(data.status === 201) {
            // document.cookie = "session=" + data.data.session;
            console.log(data)
        }
        else {
            console.log("error");
            console.log(data);

        }


    }

    return (
        <>
        <div className="card w-50">
            <h5 className="card-header">Staff Sign Up</h5>
            <div className="card-body">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Staff Name</span>
                </div>
                <input
                name="name" 
                type="text"
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
            </div>
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
                    <span className="input-group-text">Phone Number</span>
                </div>
                <input
                name="phoneNumber" 
                type="text"
                className='form-control'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
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

                <button className='btn btn-outline-info' onClick={(e) => signup()}>Create Staff Account</button>
                {/* <button className='btn btn-outline-info'>Login</button> */}
                <h4>Login with Google Auth</h4>   
            </div>
        </div>
        
        </>
    )

}

export default Signup;
