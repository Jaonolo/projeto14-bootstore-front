import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function ProductButton({ product }) {
    const navigate = useNavigate()

    return <ProductButtonContainer onClick={() => navigate(`/product/${product.productID}`)}>
        <img src={product.productImage} />
        <section>
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
            <p>{product.productDescription}</p>
        </section>
    </ProductButtonContainer>
}

const ProductButtonContainer = styled.div`
    display: flex;
    width: 100%;
    border-radius: 5px;
    height: 100px;
    
    img {
        height: 100px;
        width: 100px;
    }

    section {
        padding: 10px;
        height: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
    }
`