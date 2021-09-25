import React from 'react'
import styled from 'styled-components'
import Ellipse from '../../assets/images/Ellipse.jpg'

const HeaderContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    & > p {
        font-size: 20px;
        font-family: "Poppins medium";
    }
    & > span {
        color: ${({theme}) => theme.color.lighterText};
        font-size: 20px;
    }
    img {
        width: 16px !important;
        height: 16px;
    }
`
const CardHeader = ({EmployeName,EmployeJob}) => {
    return (
        <HeaderContainer>
            <img src={Ellipse} alt="elipse" />
            <p>{EmployeName}</p>
            <span>{EmployeJob}</span>
        </HeaderContainer>
    )
}

export default CardHeader
