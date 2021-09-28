import React from 'react'
import styled from 'styled-components'
import { Container} from '../../GlobalStyles'
import { DogsImages, DogsMobile } from './DogsImages'
import useWindowsDimentions from '../windowDimension'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DogsSection = styled.div`
    background-color: ${({theme}) => theme.color.primaryBg};
`
const DogsImagesContainer = styled.div`
    display: flex;
    gap: 24px;
`
const ImageContainer = styled.div`
    display: flex;
    align-self: flex-end;
    & > img {
        width: 100%;
    }
`
const NewCarousel = styled(Carousel)`
    ul {
        gap: 18px;
        li {
            min-width: 196px !important;
            align-self: flex-end !important;
        }
    }
`

const Dogs = () => {
    const { width } = useWindowsDimentions();
    return (
        <DogsSection>
            <Container>
                {
                    width <= 768 ?
                    <NewCarousel autoPlay={false} showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
                    {
                        DogsMobile.map((item, index)=> {
                            return (
                                <ImageContainer key={index}>
                                    <img  src={item} alt="dog" />
                                </ImageContainer>
                            )
                        })
                    }
                    </NewCarousel> :
                    <DogsImagesContainer>
                    {
                        DogsImages.map((item, index)=> {
                            return (
                                <ImageContainer key={index}>
                                    <img  src={item} alt="dog" />
                                </ImageContainer>
                            )
                        })
                    }
                    </DogsImagesContainer>
                }
                </Container>
        </DogsSection>
    )
}

export default Dogs
