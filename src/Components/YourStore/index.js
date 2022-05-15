import React from 'react';
import styled from 'styled-components'
import { useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import Header from '../Home/Header';
import ProductButton from '../Home/ProductButton';
import TokenContext from '../../Contexts/TokenContext';

import Container from "../Home/style"
import Sidebar from '../Home/Sidebar';

import addCircle from "../../Assets/circle-plus-solid.svg"

export default function YourStore() {
    const [data, setData] = useState(null)
    const [sidebar, setSidebar] = useState(false)

    const navigate = useNavigate()

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
    }]

    return <Container>
        <Header setSidebar={setSidebar} />
        <ProductGallery>
            <div className="title-bar">
                <h2>Sua Loja</h2>
                <button onClick={() => navigate('/newProduct')}>
                    <img src={addCircle} />
                </button>
            </div>
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
    gap: 12px;

    .title-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        button {
            img {
                height: 25px
            }
            background-color: transparent;
            border: none;
            padding: 0;
            display: flex;
        }
    }
`
