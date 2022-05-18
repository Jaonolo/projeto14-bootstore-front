import React from "react";
import styled from 'styled-components'
import dayjs from 'dayjs';

export default function HistoryButton({ data }) {

    return <HistoryButtonContainer>
        <section>
            <p className="history-title">Código da compra: #{data._id}</p>
            <p>Data: {dayjs(data.timestamp).format('DD/MM/YY HH:mm')}</p>
            <p>Produtos: </p>
            <div>
                {data.products.map(e => <div>
                    <p>{e.productName}</p>
                    <p>{e.productPrice}</p>
                </div>)}
            </div>
            <p>Preço: {data.products.reduce((partialSum, e) => partialSum + e.productPrice, 0)}</p>
        </section>
    </HistoryButtonContainer>
}

const HistoryButtonContainer = styled.div`
    display: flex;
    width: 100%;
    border-radius: 5px;
    
    img {
        height: 100px;
        width: 100px;
    }

    section {
        padding: 10px;
        height: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: white;
    }

    .history-title {
        line-height: 1.5;
    }

    section > div {
        background-color: var(--neutral-grey);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        div {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`