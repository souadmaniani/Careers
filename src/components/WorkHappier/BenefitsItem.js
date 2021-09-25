import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    h4 {
        font-size: 22px;
        line-height: 24px;
    }
    p {
        font-size: 20px;
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
