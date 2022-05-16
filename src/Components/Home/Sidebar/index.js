import React from 'react'
import styled from 'styled-components'
import SidebarHeader from './SidebarHeader'

import { useNavigate } from 'react-router-dom'

export default function Sidebar({sidebarController}) {
    const [toggle, setToggle] = sidebarController
    const navigate = useNavigate()

    const navigateOptions = [
        {text: "Home", destination: "/home"},
        {text: "Sua loja", destination: "/yourStore"},
        {text: "Histórico de compras", destination: "/history"},
    ]

    return <SidebarContainer toggle={toggle}>
        <article>
            <SidebarHeader/>
            <div>
                {navigateOptions.map(e => <button onClick={() => navigate(e.destination)}>{e.text}</button>)}
            </div>
        </article>
        <div onClick={() => setToggle(false)}></div>
    </SidebarContainer>
}

const SidebarContainer =  styled.aside`
    background-color: ${({ toggle }) => toggle ? "#00000055" : "transparent"};
    display: flex;
    width: 100%;
    position: absolute;
    height: 100vh;
    transition: 250ms;
    z-index: ${({ toggle }) => toggle ? 1 : -1};

    div {
        flex-grow: 1
    }

    article {
        width: 60%;
        background-color: white;
        position: absolute;
        top: 0;
        left: ${({ toggle }) => toggle ? "0" : "-60%"};
        transition: 350ms;
        height: 100vh;
        z-index: 2;

        > div {
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
`