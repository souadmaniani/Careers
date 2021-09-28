import React from 'react'
import Paragraph from '../Paragraph'
import {Container} from '../../GlobalStyles'
import styled from 'styled-components'
import Card from './Card'
import { CardsItems } from './CardsItems'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NewCarousel = styled(Carousel)`
    ul {
        gap: 26px;
        li {
            min-width: 280px !important;
            text-align: start !important;
            height: 100% !important;
            div {
                width: 100% !important;
                height: 450px;
            }
            img {
                width: auto !important;
            }
        }
    }
`
const CoreSectionMobile = () => {
    return (
        <Container>
            <Paragraph mb="8px" margin="0 0 32px"
                title="Dandians live by our core values"
                text="And if you do too, you might have the secret recipe required to be a great Dandian yourself!"
            />
            <NewCarousel autoPlay={false} showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
                {
                    CardsItems.map((item, index)=> { return ( 
                        <Card key={index} emoji={item.emoji} title={item.title} content={item.content} />
                    ) } )
                }
            </NewCarousel>
        </Container>
    )
}

export default CoreSectionMobile
