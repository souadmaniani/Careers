import React from 'react';
import styled from 'styled-components';

const ParagraphContainer = styled.div`
    margin-top: ${({mrt}) => mrt};
    position: relative;
`

const Title = styled.div`
    padding: 4px 8px;
    background-color: ${({bgColor}) => bgColor};
    border-radius: 39px;
    text-align: center;
    font-size: 12px;
    font-family: "Poppins Medium";
    color: white;
    display: inline-block;
    margin-bottom: 12px;
`
const Content = styled.div`
    @media screen and (max-width: 1200px) {
        p {
            font-size: 23px;
        }
    }
`
const Image = styled.img`
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
        position: absolute;
        left: ${({left}) => left};
        right: ${({right}) => right};
        top: ${({top}) => top};
    }
`
export const ParagraphMission = ({title, content, bgColor, mrt, imgSrc, left, right, top}) => {
    return (
        <ParagraphContainer mrt={mrt}>
            <Title bgColor={bgColor}>
                <p>{title}</p>
            </Title>
            <Content>
                <p>
                    {content}
                </p>
            </Content>
            <Image src={imgSrc} alt="vector1" left={left} right={right} top={top}/>
        </ParagraphContainer>
    )
}

 