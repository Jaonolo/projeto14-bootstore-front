import React from 'react';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import axios from 'axios'

import ProductButton from '../Home/ProductButton';
import ReturnButton from '../Home/ReturnButton';
import FillSpace from '../FillSpace';

import UserContext from '../../Contexts/UserContext';

import Container from "./style";

export default function ProductScreen() {
    const [ data, setData ] = useState(null)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const BACK_URL = 'http://localhost:5000'

    useEffect(() => {
        axios
            .get(BACK_URL+`/cart`, { headers: { authorization: 'Bearer ' + user.token } })
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])

    const checkout = () => {
        axios
            .post(BACK_URL+`/checkout`, {}, { headers: { authorization: 'Bearer ' + user.token } })
            .then(() => {
                alert("Compra realizada com sucesso!")
                navigate("/home")
            })
            .catch(error => alert(`Erro ao tentar entrar em contato com o servidor: ${error}`))
    }

    return (
        <Container>
            <div className="close-button">
                <h1>Carrinho</h1>
                <ReturnButton />
            </div>
            <ProductGallery>
                {!(data === null || data?.length === 0) ? data.map(e => <ProductButton product = {e} />) : 
                <FillSpace>
                    Não há nada no seu carrinho ainda
                </FillSpace>}   
            </ProductGallery>
            {!(data === null || data?.length === 0) ?
            <div className="price">
                <p>Total:</p>
                {data?.reduce((partialSum, e) => partialSum + e.productPrice, 0)}
            </div> : <></>}
            <div className="price-container">
                <button type='submit' onClick={checkout} disabled={(data === null || data?.length === 0)}>
                    <p>
                        Finalizar Compra
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