import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;
    flex-direction: column;
    background-color: var(--neutral-grey);

    overflow: scroll;

    h1 {
        font-size: 100px;
    }

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 1px solid white;
        border-radius: 20px;
    }
    overflow: hidden;
`
export default Container;