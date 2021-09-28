import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex ;
    gap: 5px ;
    align-items: center ;
    border-bottom: 4px solid ${({theme})=> theme.color.border} ;
    & > p {
        font-size: 18px;
        font-family: "Poppins medium";
    }
    & > span {
        color: ${({theme}) => theme.color.lighterText};
        font-size: 18px;
    }
`
const Button = ({EmployeName,EmployeJob}) => {
    return (
        <ButtonContainer>
            <p>{EmployeName}</p>
            <span>{EmployeJob}</span>
        </ButtonContainer>
    )
}

export default Button
