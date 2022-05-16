import React from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react';

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

    /*useEffect(() => {
        axios
            .get(BACK_URL+`/products/${id}`, { headers: { authorization: user.token } })
            .then(response => setData(response.body))
            .catch(() => alert("Erro ao tentar entrar em contato com o servidor"))
    }, [])*/

    const addToCart = () => {
        axios
            .post(BACK_URL+`/cart`, id, { headers: { authorization: user.token } })
            .then(() => {
                alert("Produto adicionado ao carrinho!")
                navigate("/home")
            })
            .catch(error => alert(`Erro ao tentar entrar em contato com o servidor: ${error}`))
    }

    return (
        <Container productImage={cam}>
            <div className="close-button">
                <ReturnButton />
            </div>
            <div className="img-container"><div className="img"></div></div>
            <h1>Título do produto</h1>
            <p>Descrição do produto</p>
            <div className="price-container">
                <p>Preço</p>
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

