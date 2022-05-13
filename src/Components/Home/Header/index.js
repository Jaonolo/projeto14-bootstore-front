import React from 'react'
import styled from 'styled-components'

import OptionsMenu from '../OptionsMenu'
import Searchbar from '../Searchbar'

export default function Header() {
    return <HeaderContainer>
        <Searchbar></Searchbar>
        <OptionsMenu></OptionsMenu>
    </HeaderContainer>
}

const HeaderContainer =  styled.header`
    position: sticky;
    top: 0;
    width: 100%;
`