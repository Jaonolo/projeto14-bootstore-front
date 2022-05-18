import React from 'react';
import styled from 'styled-components'
import { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import Header from './Header';
import ProductButton from './ProductButton';
import UserContext from '../../Contexts/UserContext';

import Container from "./style"
import Sidebar from './Sidebar';

export default function Home() {
    const [data, setData] = useState(null)
    const [sidebar, setSidebar] = useState(false)

    const { user } = useContext(UserContext)
    const BACK_URL = 'http://localhost:5000'

    useEffect(() => {
        axios.get(`${BACK_URL}/getProducts`, { headers: { authorization: 'Bearer ' + user.token }})
            .then((response) => {
                setData(response.data)
        }).catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])

    return <Container>
        <Header setSidebar={setSidebar} />
        <ProductGallery>
            {!(data === null || data?.length === 0) ? data.map(e => <ProductButton product = {e} />) : "Não conseguimos encontrar produtos ;--;"}    
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
