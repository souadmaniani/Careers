import React from 'react'
import styled from 'styled-components'
import { CategoryItems } from './CategoryItems'

const CategoryMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0 auto 67px;
    max-width: 720px;
    & > p {
        color: ${({theme}) => theme.color.lighterText};
        font-size: ${({theme}) => theme.fontSize.sm};
        margin-bottom: 14px;
    }
`
const Items = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
`
const Tag = styled.div`
    background-color: ${({theme}) => theme.color.white};
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-radius: 39px;
    & > p {
        font-size: ${({theme}) => theme.fontSize.sm};
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



const Categories = () => {
    return (
        <CategoryMenu>
        <p>Or select one of the categories below to quickly see available jobs by department</p>
        <Items>
            {
                CategoryItems.map((item, index)=> { return (
                    <Tag key={index}>
                        <p>{item.tagText}</p>
                        <TagNumber>{item.tagNumber}</TagNumber>
                    </Tag>
                )})
            }
        </Items>
        </CategoryMenu>
    )
}

export default Categories
