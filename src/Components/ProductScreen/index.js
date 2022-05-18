import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react';
import axios from 'axios';

import cam from '../../../public/img/cam.png';
import cart from '../../Assets/cart-shopping-solid.svg'
import UserContext from '../../Contexts/UserContext';

import Container from "./style";
import ReturnButton from '../Home/ReturnButton';

export default function ProductScreen() {
    const [ data, setData ] = useState(null)
    const { id } = useParams()
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const BACK_URL = 'http://localhost:5000'

    useEffect(() => {
        axios
            .get(BACK_URL+`/products/${id}`, { headers: { authorization: user.token } })
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])

    const addToCart = () => {
        axios
            .post(BACK_URL+`/cart`, { product: id }, { headers: { authorization: user.token } })
            .then(() => {
                alert("Produto adicionado ao carrinho!")
                navigate("/home")
            })
            .catch(error => alert(`Erro ao tentar entrar em contato com o servidor: ${error}`))
    }

    return (
        <Container productImage={data ? data.productImage : cam}>
            <div className="close-button">
                <ReturnButton />
            </div>
            <div className="img-container"><div className="img"></div></div>
            <h1>{data?.productName}</h1>
            <p>{data?.productDescription}</p>
            <div className="price-container">
                <p>{data?.productPrice}</p>
                <button type='submit' onClick={addToCart} >
                    <img src={cart} />
                    <p>
                        Adicionar ao carrinho
                    </p>
                </button>
            </div>
        </Container>
    )
}

