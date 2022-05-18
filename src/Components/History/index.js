import React from 'react';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import axios from 'axios';

import HistoryButton from '../HistoryButton';
import ReturnButton from '../Home/ReturnButton';

import UserContext from '../../Contexts/UserContext';

import Container from "./style";

export default function ProductScreen() {
    const [ data, setData ] = useState(null)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const BACK_URL = 'http://localhost:5000'

    useEffect(() => {
        axios
            .get(BACK_URL+`/checkout`, { headers: { authorization: 'Bearer ' + user.token } })
            .then(response => setData(response.data))
            .catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])

    const backToHome = () => navigate("/home")

    return (
        <Container>
            <div className="close-button">
                <h1>Seu histórico de compras</h1>
                <ReturnButton />
            </div>
            <ProductGallery>
                {data ? data.reverse().map(e => <HistoryButton data = {e} />) : "Você não realizou nenhuma compra ainda" }    
            </ProductGallery>
            <div className="price-container">
                <button type='submit' onClick={backToHome} >
                    <p>
                        Voltar à Home
                    </p>
                </button>
            </div>
        </Container>
    )
}

const ProductGallery = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 12px;
    gap: 12px;
    flex-grow: 1;

    overflow: scroll;
`