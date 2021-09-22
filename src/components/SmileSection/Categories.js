import React from 'react'
import styled from 'styled-components'
import { CategoryItems } from './CategoryItems'
import { CategoriesCarousel } from './CategoriesCarousel'
import Tag from '../Tag'
import useWindowDimensions from '../windowDimension'

const CategoryMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0 auto 67px;
    max-width: 59%;
    text-align: center;
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
const Categories = () => {

    const { width } = useWindowDimensions();
    return (
        <>
        { width <= 768 ? <CategoriesCarousel /> : 
            <CategoryMenu>
                <p>Or select one of the categories below to quickly see available jobs by department</p>
                <Items>
                    {
                        CategoryItems.map((item, index)=> { return (
                            <Tag key={index} tagText={item.tagText}
                                tagNumber={item.tagNumber} />
                        )})
                    }
                </Items>
            </CategoryMenu>
        }
        </>
    )
}

export default Categories
