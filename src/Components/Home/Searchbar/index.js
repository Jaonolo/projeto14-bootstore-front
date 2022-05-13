import React from "react"
import styled from 'styled-components'

import hamburguer from '../../../icons8-menu-arredondado-100.png'

export default function Searchbar() {
    return <SearchbarContainer>
        <button>
            <img src={hamburguer} />
        </button>
        <form>
            <input />
            <button className="search-button">Procurar</button>
        </form>
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