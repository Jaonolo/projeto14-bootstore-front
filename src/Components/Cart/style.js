import styled from 'styled-components';

const Container = styled.div`

    padding-top: 20px;
    width: 100%;
    height: 100vh;
    background-color: var(--neutral-grey);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 25%;
        margin: auto;
        border: 1px solid white;
        border-radius: 20px;
    }

    button {
        img {
            height: 36px;
        }

        display: flex;
        width: 200px;
        border: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        font-family: 'Raleway';
        background: black;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        height: 50px
    }

    > h1 {
        height: 8%;
        display: flex;
        align-items: center;
        margin: 0 20px
    }

    .price-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: var(--main-color);
    }

    .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #FFFFFF;
        font-size: 20px;
    }

    .close-button {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px
    }
`
export default Container;