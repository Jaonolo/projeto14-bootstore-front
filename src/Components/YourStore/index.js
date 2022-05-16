import React from 'react';
import styled from 'styled-components'
import { useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import Header from '../Home/Header';
import ProductButton from '../Home/ProductButton';
import UserContext from '../../Contexts/UserContext';

import Container from "../Home/style"
import Sidebar from '../Home/Sidebar';

import addCircle from "../../Assets/circle-plus-solid.svg"

export default function YourStore() {
    const [data, setData] = useState(null)
    const [sidebar, setSidebar] = useState(false)

    const navigate = useNavigate()

    const { user } = useContext(UserContext)
    const BACK_URL = 'http://localhost:5000'

    useEffect(() => {
        axios
            .get(BACK_URL+`/mystore`, { headers: { authorization: 'Bearer ' + user.token } })
            .then(response => setData(response.body))
            .catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])

    return <Container>
        <Header setSidebar={setSidebar} />
        <ProductGallery>
            <div className="title-bar">
                <h2>Sua Loja</h2>
                <button onClick={() => navigate('/newProduct')}>
                    <img src={addCircle} />
                </button>
            </div>
            {data ? data.map(e => <ProductButton product = {e} />) : "Ainda não há produtos na sua loja"}    
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
