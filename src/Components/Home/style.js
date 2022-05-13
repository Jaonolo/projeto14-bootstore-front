import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ededed;

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

`
export default Container;

// example of styled-components