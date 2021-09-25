import React from 'react';
import {Section} from '../SmileSection/style';
import tooth from '../../assets/images/tooth.png';
import { ParagraphMission } from './ParagraphMission'
import  { MissionContainer, Missions, Dental, Title, Tooth} from './style'
import Vector1 from '../../assets/images/Vector1.svg';
import Vector2 from '../../assets/images/Vector2.svg'

const text= <>Use a perfect blend of <span style={{color: "#f54f64"}}>cutting-edge technology <span style={{color: "#18181a"}}>and </span>personal customer support</span> to address novel,
complex and unsolved problems in an industry that has been underserved.</>

const MissionSection = () => {
    return (
        <Section>
            <MissionContainer>
                <Missions>
                    <Title>
                        <h1>We’re on a mission to change an underserved industry</h1>
                    </Title>
                    <Dental>
                        <ParagraphMission title="OUR MISSION" bgColor="#4ccfad" mrt="6%" imgSrc={Vector1} top="12px"
                            content="Become the operating system of every dental practice in the country."

                        />
                        <Tooth>
                            <img src= {tooth} alt="tooth" />
                        </Tooth>
                        <ParagraphMission title="THE CHALLENGE" bgColor="#f8879f" mrt="6%" imgSrc={Vector2} top="12px" right="0"
                            content={text}
                        />
                    </Dental>
                </Missions>
            </MissionContainer>
        </Section>
    )
}

export default MissionSection
