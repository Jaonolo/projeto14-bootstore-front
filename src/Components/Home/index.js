import React from 'react';
import styled from 'styled-components'
import { useState, useContext } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'

import Header from './Header';
import ProductButton from './ProductButton';
import TokenContext from '../../Contexts/TokenContext';

import Container from "./style"
import Sidebar from './Sidebar';

export default function Home() {
    const [data, setData] = useState(null)
    const [sidebar, setSidebar] = useState(false)

    const { token } = useContext(TokenContext)
    const BACK_URL = 'https://bootstore10.herokuapp.com'

    /*useEffect(() => {
        axios.get(BACK_URL+'/products').then((response) => {
            setData(response.body)
            console.log(response.body)
        }, {
            
            headers: {
                authorization: token
            }

        }).catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
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
        <Header setSidebar={setSidebar} />
        <ProductGallery>
            {produtos.map(e => <ProductButton product = {e} />)}    
        </ProductGallery>
        <Sidebar sidebarController={[sidebar, setSidebar]}></Sidebar>
    </Container>
}

const ProductGallery = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 12px;
    gap: 12px
`