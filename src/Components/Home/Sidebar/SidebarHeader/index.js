import React from 'react'
import styled from 'styled-components'

import profile from '../../../../Assets/user-solid.svg'
import logout from '../../../../Assets/right-from-bracket-solid.svg'
import { useContext } from 'react'
import UserContext from '../../../../Contexts/UserContext'

export default function SidebarHeader() {
    const { user, setUser } = useContext(UserContext)

    const logoutFunction = () => {
        localStorage.setItem("user", JSON.stringify(null))
        setUser(null)
    }
    
    return <SidebarHeaderContainer>
        <main>
            <div>
                <img src={profile}/>
                <p>Olá, {user.name}</p>
            </div>
            <img src={logout} onClick={logoutFunction}/>
        </main>
    </SidebarHeaderContainer>
}

const SidebarHeaderContainer =  styled.header`
    background-color: var(--main-color);
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;

    img {
        height: 25px
    }

    main {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    div {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`