import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Tag from '../Tag'
import { CategoryItems } from './CategoryItems'
import styled from 'styled-components'
import useWindowDimensions from '../windowDimension';

const NewCarousel = styled(Carousel)`
    li {
        min-width: ${({width}) => width < 768 ? `80% !important` : `50% !important`};
    }
`

export const CategoriesCarousel = () => {
    const { width } = useWindowDimensions();
    return (
        <NewCarousel autoPlay={false} showIndicators={false} showStatus={false} showArrows={false} width={width}>
            {
                CategoryItems.map((item, index)=> { return (
                    <Tag key={index} tagText={item.tagText}
                        tagNumber={item.tagNumber} />
                )})
            }
        </NewCarousel>
    );
}