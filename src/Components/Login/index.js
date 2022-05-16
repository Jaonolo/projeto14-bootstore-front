import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import React from 'react';
import axios from 'axios';

import LoginContainer from "./style"
import UserContext from '../../Contexts/UserContext';
import { useContext } from 'react';

export default function ComponentA() {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate();
    const [data, setData] = useState({ email: null, password: null });
    const API = `http://localhost:5000`;

    function HandleSubmit(e) {

        e.preventDefault();
        axios.post(`${API}/login`, data).then(res => {
            const user = { 
                name: res.data.name,
                token: res.data.token
            }

            localStorage.setItem('user', JSON.stringify(user));
            setUser(user)
        }).catch(err => alert(err.response.data));
    }

    return (

        <LoginContainer>
            <div className="items">
                <h1>BootStore</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <button type='submit'>Sign In</button>
                    <Link to='/register'>Don't have an account? Sign-Up !</Link>
                </form>
            </div>
        </LoginContainer>
    )

}