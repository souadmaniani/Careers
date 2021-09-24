import React  from 'react';
import styled from 'styled-components';
import SimpleCard from './SimpleCard';
import CardHeader from './CardHeader';
import { EmployesData } from './EmployesItems';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../GlobalStyles'
import Button from './Button'
import useWindowDimensions from '../windowDimension';
import EmployesMobile from './EmployesMobile'

const EmployesSection = styled.div`
`
const NewContainer = styled(Container)`
    position: relative;
    padding: 0px 117px 80px 132px;
`
const EmployeContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`
const LeftSide= styled.div`
    width: 58%;
    position: absolute;
    z-index: 2;
    text-align: start;
`
const RightSide= styled.div`
    width: 48% !important;
    margin-left: auto;
    & > img {
        height: 90%;
    }
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 8px;
`
const NewCarousel = styled(Carousel)`
    li {
        height: 100%;
    }
    .carousel:nth-child(2) {
        position: absolute;
        z-index: 2;
        width: auto;
        .thumbs {
            display: flex !important;
            justify-content: space-between !important;
            gap: 40px;
            .selected {
                display:none;
            }
            li {
                width: auto !important;
                border: none !important;
                cursor: pointer;
            }
        }
    }
`

const RenderThumbs = ()=> {
    return (
        EmployesData.map((item, index) => { return (
                <Button key={(index)} EmployeName={item.name} EmployeJob={item.job} /> 
        )})
        )
}


const Employes = () => {
    const { width } = useWindowDimensions();
    return (
        <EmployesSection>
            { width <= 1370 ? <EmployesMobile /> :
            <NewContainer>
                <NewCarousel autoPlay={false} showIndicators={false} showStatus={false} showArrows={false}
                    renderThumbs= {RenderThumbs}
                >
                {
                    EmployesData.map((item, index)=> {
                        return (
                        <EmployeContainer key = {index}>
                            <LeftSide>
                                <CardHeader EmployeName={item.name} EmployeJob={item.job} />
                                <Cards>
                                    <SimpleCard yes={item.cards[0][0]} yes2={item.cards[0][1]} yes3={item.cards[0][2]} text={item.text1}>
                                        <p>{item.text1}</p>
                                    </SimpleCard>
                                    <SimpleCard yes={item.cards[1][0]} yes2={item.cards[1][1]} yes3={item.cards[1][2]} text={item.text2}>
                                        <p>{item.text2}</p>
                                    </SimpleCard>
                                </Cards>
                            </LeftSide>
                            <RightSide>
                                <img src={item.img} alt="" />
                            </RightSide>
                        </EmployeContainer>
                    )
                    })
                }
                </NewCarousel>
           </NewContainer>
    }
        </EmployesSection>
    )
}

export default Employes
