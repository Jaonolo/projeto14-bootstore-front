import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import React from 'react';
import axios from 'axios';

import LoginContainer from "./style"
import TokenContext from '../../Contexts/TokenContext';
import { useContext } from 'react';

export default function ComponentA() {

    const { setToken } = useContext(TokenContext)

    const navigate = useNavigate();
    const [data, setData] = useState({ email: null, password: null });
    const API = `https://bootstore10.herokuapp.com`;

    function HandleSubmit(e) {

        e.preventDefault();
        axios.post(`${API}/login`, data).then(res => {

            setData({ username: res.data.name, token: res.data.token });
            localStorage.setItem('log', res.data.token);
            setToken(res.data.token)
            localStorage.setItem('name', res.data.username);
            return navigate('/home');

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