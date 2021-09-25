import React from 'react'
import styled from 'styled-components'
import Ellipse from '../../assets/images/Ellipse.jpg'

const HeaderContainerMobile = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 19px;
    justify-content: ${({index}) => index !== 0 ? `center` : `flex-start`};
    img {
        width: 16px !important;
        height: 16px;
        margin-top: 12px;
    }
`
const Info = styled.div`
    text-align: start;
    & > p {
        font-size: 20px;
        font-family: "Poppins medium";
    }
    & > span {
        color: ${({theme}) => theme.color.lighterText};
        font-size: 20px;
    }
`
const CardHeader = ({EmployeName,EmployeJob, index}) => {
    return (
        <HeaderContainerMobile index={index}>
            <img src={Ellipse} alt="elipse" />
            <Info>
                <p>{EmployeName}</p>
                <span>{EmployeJob}</span>
            </Info>
        </HeaderContainerMobile>
    )
}

export default CardHeader
