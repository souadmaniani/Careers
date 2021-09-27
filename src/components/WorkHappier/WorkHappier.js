import React from 'react'
import {Container} from '../../GlobalStyles'
import Paragraph from '../Paragraph'
import styled from 'styled-components'
import { Benefits } from './BenefitsData'
import BenefitsItem from './BenefitsItem'
import { Activities } from './ActivitiesData'
import ActivityItem from './ActivityItem'
import slack from '../../assets/images/slack.svg'
import Card from './Card'
import  useWindowDimensions from '../windowDimension'
const WorkHappierSection = styled.div`
    background-color: ${({theme}) => theme.color.primaryBg};
`
const NewContainer= styled(Container)`
    padding: 120px 256px 0;
    @media screen and (max-width: 1300px) {
        padding: 100px 120px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 40px 60px;
    }
    @media screen and (max-width: 766px) {
        padding: 40px 16px;
    }
`
const WorkHappierContainer = styled.div`

`
const BenefitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 96px;
    row-gap: 24px;
    & > div {
        width: calc((100% - 96px) / 2);
    }
    @media screen and (max-width: 768px) {
        & > div {
            width: 100%;
        }
    }
`
const ActivitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-bottom: 110px;
    @media screen and (max-width: 768px) {
        gap: 107px;
        & > div:first-child > div > img{
            height: 227px;
        }
        & > div:last-child > div{
            bottom: -31px;
        }
    }
`
const SlackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > h2 {
        max-width: 392px;
        margin-top: 8px;
    }    
`
const CardsContainer = styled.div`
    padding: 24px 256px 72px;
    display: flex;
    gap: 24px;
    @media screen and (max-width: 1200px){
        gap: 16px;
        padding: 24px 247px 72px;
    }
    @media screen and (max-width: 1024px){
        flex-direction: column;
        gap: 16px;
        padding: 24px 16px 72px;
    }
`

const WorkHappier = () => {
    const { width } = useWindowDimensions();
    return (
        <WorkHappierSection>
            <NewContainer>
                <WorkHappierContainer>
                    <Paragraph title="Work happier..." mb="8px" margin=" 0 0 48px"
                    text="TBD: We offer amazing benefits to ensure that our team is healthy, happy, and excited to make a difference."/>
                <BenefitsContainer>
                {
                    Benefits.map((item, index)=> {
                        return (
                            <BenefitsItem key={index} icon={item.icon} title={item.title} text={item.text} />
                        )
                    })
                }
                </BenefitsContainer>
                <Paragraph title="...and play harder" mb="8px" margin=" 96px 0 2px"
                    text="TBD: We offer amazing benefits to ensure that our team is healthy, happy, and excited to make a difference for dentists and their patients across the entire nation."/>
                </WorkHappierContainer>
            </NewContainer>
            <ActivitiesContainer>
            {
                Activities.map((item, index)=> {
                    return (
                        <ActivityItem key={index} title={item.title} text={item.text} img={item.img}
                        orderParagraph={width <= 768 ? 2 : item.orderParagraph} orderImg={ width <= 768 ? 1 : item.orderImg} padding={item.padding}/>
                        )
                    })
            }
            </ActivitiesContainer>
            <SlackContainer>
                <img src={slack} alt="slack" />
                <h2 style={{padding: "0 30px"}}>Here’s a sneak peak at our Slack culture</h2>
                <CardsContainer>
                    <Card title="#dandy-dogs" text="The go-to spot to share photos of your pets, not just dogs. We don’t discriminate cats, we promise."/>
                    <Card title="#parents-unite" text="Have something to brag about your young’un? Share the celebrations amongst other Dandy parents!"/>
                </CardsContainer>
            </SlackContainer>
        </WorkHappierSection>
    )
}

export default WorkHappier
