import React from 'react';
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
=======
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
>>>>>>> jaonolo

import Header from './Header';
import ProductButton from './ProductButton';

import Container from "./style"

export default function Home() {
    const [data, setData] = useState(null)
    /*const BACK_URL = ''

<<<<<<< HEAD
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
=======
    useEffect(async () => {
        try {

            const response = await axios.get(BACK_URL+'/products')
            setData(response.body)
        
        } catch (error) {
            alert("Erro ao tentar entrar em contato com o servidor")
        }

    }, [])*/

    const produtos = [{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    },{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    },{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    },{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    },{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    },{
        productName: "oi",
        productPrice: 200,
        productDescription: "jão",
        productImage: 'https://http.cat/404.png'
    }]

    return <Container>
        <Header />
        <ProductGallery>
            {produtos.map(e => <ProductButton product = {e} />)}    
        </ProductGallery>
    </Container>
}

const ProductGallery = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 12px;
    gap: 12px
`
>>>>>>> jaonolo
