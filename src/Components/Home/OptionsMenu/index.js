import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return <OptionsMenuContainer>
        <button>Categorias</button>
        <button>Filtros</button>
    </OptionsMenuContainer>
}

const OptionsMenuContainer =  styled.nav`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    width: 100%;

    button {
        border: solid 1px #BBBBBB;
        border-radius: 0px;
        background-color: white;
        height: 50px
    }
`