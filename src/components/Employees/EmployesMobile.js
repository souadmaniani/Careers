import React  from 'react';
import styled from 'styled-components';
import SimpleCard from './SimpleCard';
import CardHeader from './CardHeader';
import { EmployesData } from './EmployesItems';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../GlobalStyles'
import sticker from '../../assets/images/sticker.png'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const NewCarousel = styled(Carousel)`
    /* overflow-x: initial; */
`
const EmployeContainer = styled.div``

const ImageContainer = styled.div`
    position: relative;
    
    & > img:nth-child(2) {
        position: absolute;
        top: -26px;
        width: auto;
        z-index: 2;
        margin: auto;
        left: calc(50% - 58.5px);
    }
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 16px;
`

const Next = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`
const RenderArrowPrev = ()=> {
    return (
        <Next>
            <GrFormPrevious />
            <p>Prev</p>
        </Next>
    )
}

const RenderArrowNext = ()=> {
    return (
        <Next>
            <p>Next</p>
            <GrFormNext />
        </Next>
    )
}

const EmployesMobile = () => {
    return (
        <Container>
            <NewCarousel autoPlay={false} showStatus={false} showIndicators={false}
                renderArrowNext={RenderArrowNext} renderArrowPrev={RenderArrowPrev}
            >
                {
                    EmployesData.map((item, index) => { return (

                        <EmployeContainer key={index}>
                            <ImageContainer>
                                <img src={item.imgMobile} alt="img"/>
                                <img src={sticker} alt="sticker" />
                            </ImageContainer>
                            <CardHeader  EmployeName={item.name} EmployeJob={item.job} />
                            <Cards>
                                <SimpleCard  yes={item.cards[0][0]} yes2={item.cards[0][1]} yes3={item.cards[0][2]} text={item.text1}>
                                    <p>{item.text1}</p>
                                </SimpleCard>
                                <SimpleCard  yes={item.cards[1][0]} yes2={item.cards[1][1]} yes3={item.cards[1][2]} text={item.text2}>
                                    <p>{item.text2}</p>
                                </SimpleCard>
                            </Cards>
                        </EmployeContainer>
                        )
                    })
                }
            </NewCarousel>
        </Container>
    )
}

export default EmployesMobile
