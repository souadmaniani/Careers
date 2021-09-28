import React from 'react'
import styled from 'styled-components'

const TagContainer = styled.div`
    background-color: ${({theme}) => theme.color.white};
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 39px;
    gap: 10px;
    cursor: pointer;
    & > p {
        font-size: 14px;
    }
`
const TagNumber = styled.div`
    padding: 0 8px;
    border-radius: 84px;
    background-color: ${({theme}) => theme.color.primary};
    text-align: center;
    color: ${({theme}) => theme.color.white};
    font-family: "Poppins medium";
    font-size: ${({theme}) => theme.fontSize.sm};
`
const Tag = ({tagText, tagNumber}) => {
    return (
        <TagContainer>
            <p>{tagText}</p>
            <TagNumber>{tagNumber}</TagNumber>
        </TagContainer>
    )
}

export default Tag
