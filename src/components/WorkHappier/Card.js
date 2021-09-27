import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 24px 24px 32px;
    background: #FFFFFF;
    border: 1px solid ${({theme}) => theme.color.border};
    text-align: start;
    min-width: calc((100% - 4px) / 2);
    max-width: 400px;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    & > h2 {
        margin-bottom: 8px;
    }
    & > p {
        font-size: 14px;
    }

`
const Card = ({title, text}) => {
    return (
        <CardContainer>
            <h4>{title}</h4>
            <p>{text}</p>
        </CardContainer>
    )
}

export default Card
