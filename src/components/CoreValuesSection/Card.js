import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 321px;
    padding: 40px 32px;
    background: #FFFFFF;
    border: 1px solid #E4E4E4;
    border-radius: 16px;
    & > img {
        margin-bottom: 10px;
    }
    & > p {
        margin-top: 10px;
        font-size: 14px;
        color: ${({theme}) => theme.color.lighterText};
    }

`
const Card = ({emoji, title, content}) => {
    return (
        <CardContainer>
            <img src={emoji} alt="emoji" />
            <h4>{title}</h4>
            <p>{content}</p>
        </CardContainer>
    )
}

export default Card
