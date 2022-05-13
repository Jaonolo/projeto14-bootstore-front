import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import Container from "./style"

export default function ComponentC() {

    const API = 'http://localhost:5000/getProducts'

    useEffect(() => {

        axios.get(`${API}`).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });

    }, [API]);

    return (
        <Container>
            <h1>this is a home bro</h1>
            <Link to='/newProduct'>create new product</Link>
        </Container>
    )
}