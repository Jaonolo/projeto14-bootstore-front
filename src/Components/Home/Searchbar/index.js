import React from "react"
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

import hamburguer from '../../../Assets/bars-solid.svg'
import cart from '../../../Assets/cart-shopping-solid.svg'

export default function Searchbar({ setSidebar }) {
    const navigate = useNavigate()

    return <SearchbarContainer>
        <button onClick={() => setSidebar(true)}>
            <img src={hamburguer} />
        </button>
        <form>
            <input />
            <button className="search-button">Procurar</button>
        </form>
        <button onClick={() => navigate("/cart")}>
            <img src={cart} />
        </button>
    </SearchbarContainer>
}

const SearchbarContainer = styled.nav`
    padding: 10px;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;

    form {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .search-button {
        border: none;
        border-radius: 2px;
        background-color: black;
        color: white;
        font-weight: 700;
    }

    button {
        img {
            height: 25px
        }
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
    }
`