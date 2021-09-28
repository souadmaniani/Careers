import React, { useState }  from 'react';
import styled from 'styled-components';
import SimpleCard from './SimpleCard';
import CardHeaderMobile from './CardHeaderMobile';
import { EmployesData } from './EmployesItems';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../GlobalStyles'
import sticker from '../../assets/images/sticker.png'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useWindowDimensions from '../windowDimension'

const NewCarousel = styled(Carousel)`
    /* overflow-x: initial; */
`
const EmployeContainer = styled.div``

const ImageContainer = styled.div`
    position: relative;
    & > img:first-child{
        height: 428px;
        @media screen and (max-width: 490px){
            height: 216px;
        }
    }
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
    gap: 20px;
    margin-top: 16px;
`

const Next = styled.button`
    display: ${({index}) => index === 4 ? `none` : `flex`};
    align-items: center;
    gap: 13px;
    position: absolute;
    top: ${({width})=> width === 768 ? `480px` : `250px`};
    right: 0;
    background-color: transparent;
    z-index: 2;
    `
const Prev = styled.button`
    display: ${({index}) => index === 0 ? `none` : `flex`};
    align-items: center;
    gap: 13px;
    position: absolute;
    top: ${({width})=> width === 768 ? `480px` : `250px`};
    left: 0;
    background-color: transparent;
    z-index: 2;

`

const RenderArrowPrev = (clickHandler, index, width)=> {
    return (
        <Prev onClick={clickHandler} index={index} width={width}>
            <GrFormPrevious />
            <p>Prev</p>
        </Prev>
    )
}

const RenderArrowNext = (clickHandler, index, width)=> {
    return (
        <Next onClick={clickHandler} index={index} width={width}>
            <p>Next</p>
            <GrFormNext />
        </Next>
    )
}
 

const EmployesMobile = () => {
    const [index, setIndex] = useState(0);
    const getSelectedItem = (index)=> {
        setIndex(index);
    }
    const { width } = useWindowDimensions();
    return (
        <Container>
            <NewCarousel infiniteLoop={false} showStatus={false} showIndicators={false} showThumbs={false}
                renderArrowPrev={(clickHandler)=> RenderArrowPrev(clickHandler, index, width)}
                renderArrowNext={(clickHandler)=> RenderArrowNext(clickHandler, index, width)} 
                onChange={(index)=> getSelectedItem(index)}
            >
                {
                    EmployesData.map((item, index) => { return (

                        <EmployeContainer key={index}>
                            <ImageContainer>
                                <img src={item.imgMobile} alt="img"/>
                                <img src={sticker} alt="sticker" />
                            </ImageContainer>
                            <CardHeaderMobile  EmployeName={item.name} EmployeJob={item.job} index={index} />
                            <Cards>
                                <SimpleCard  yes={item.cards1[0][0]} yes2={item.cards1[0][1]} yes3={item.cards1[0][2]} text={item.text1}>
                                    <p>{item.text1}</p>
                                </SimpleCard>
                                <SimpleCard  yes={item.cards1[1][0]} yes2={item.cards1[1][1]} yes3={item.cards1[1][2]} text={item.text2}>
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
