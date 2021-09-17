import React from 'react'
import styled from 'styled-components'
import { CategoryItems } from './CategoryItems'

const CategoryMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
        color: ${({theme}) => theme.color.lighterText};
        font-size: ${({theme}) => theme.fontSize.sm};
    }
`
const Items = styled.div`
    display: flex;
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
`
const TagNumber = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 84px;
    background-color: ${({theme}) => theme.color.primary};
    text-align: center;
    color: ${({theme}) => theme.color.white};
    font-family: "Poppins medium";

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
