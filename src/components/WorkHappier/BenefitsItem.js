import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    & > div {
        display: flex;
        gap: 10px;
        margin-bottom: 8px;
    }
    h4 {
        line-height: 24px;
    }
    p {
        font-size: 16px;
        color: ${({theme}) => theme.color.lighterText};
        line-height: 24px;
    }
`
const BenefitsItem = ({icon, title, text}) => {
    return (
        <ItemContainer>
            <div>
                <img src={icon} alt="benefit" />
                <h4>{title}</h4>
            </div>
            <p>{text}</p>
        </ItemContainer>
    )
}

export default BenefitsItem
