import React from 'react'
import styled from 'styled-components'

export default ({ children }) => <Container>{children}</Container>

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`