import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import React from 'react';
import axios from 'axios';

import RegisterContainer from "./style"

export default function ComponentA() {

    const navigate = useNavigate();
    const [data, setData] = useState({ name: null, email: null, password: null, repeat_password: null });
    const API = `http://localhost:5000`;

    function HandleSubmit(e) {

        e.preventDefault()
        axios.post(`${API}/register`, data).then(res => navigate('/')).catch(err => {
            alert(err.response.data)
        });
    }

    return (

        <RegisterContainer>
            <div className="items">
                <h1>BootStore</h1>
                <form onSubmit={HandleSubmit}>
                    <input type='text' placeholder='name' required
                        onChange={e => setData({ ...data, name: e.target.value })} />
                    <input type='text' placeholder='email' required
                        onChange={e => setData({ ...data, email: e.target.value })} />
                    <input type='password' placeholder='password' required
                        onChange={e => setData({ ...data, password: e.target.value })} />
                    <input type='password' placeholder='confirm password' required
                        onChange={e => setData({ ...data, repeat_password: e.target.value })} />
                    <button type='submit'>Sign Up</button>
                    <Link to='/'>Already have an account ? Sign In !</Link>
                </form>
            </div>
        </RegisterContainer>
    )
}