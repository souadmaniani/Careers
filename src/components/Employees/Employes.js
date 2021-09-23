import React from 'react';
import styled from 'styled-components';
import SimpleCard from './SimpleCard';
import CardHeader from './CardHeader';
import { EmployesData } from './EmployesItems';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../GlobalStyles'

const EmployesSection = styled.div`
    border: 1px solid;
`
const NewContainer = styled(Container)`
    padding: 0px 117px 80px 132px;
    border: 1px solid;
`
const EmployeContainer = styled.div`
    position: relative;
    border: 1px solid red;
`
const LeftSide= styled.div`
    width: 58%;
    position: absolute;
    z-index: 2;
    text-align: start;
    padding-top: 76px;
`
const RightSide= styled.div`
    width: 48% !important;
    min-height: 584px;
    margin-left: auto;
    & > img {
        height: 100%;
    }
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Employes = () => {
    return (
        <EmployesSection>
            <NewContainer>
                <Carousel autoPlay={false}  showStatus={false} showArrows={false}>
                {
                    EmployesData.map((item, index)=> { return (
                        <EmployeContainer key = {index}>
                            <LeftSide>
                                {/* <CardHeader EmployeName={item.name} EmployeJob={item.job} /> */}
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
                
                </Carousel>
           </NewContainer>
        </EmployesSection>
    )
}

export default Employes
