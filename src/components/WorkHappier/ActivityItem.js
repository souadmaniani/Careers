import React from 'react'
import styled from 'styled-components'

const ActivityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 71px;
    padding: ${({padding})=> padding};
    position: relative;
    @media screen and (max-width: 1200px) {
        padding: 0 132px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        padding: 0 16px;
   
    }
`
const Paragraph = styled.div`
    order: ${({orderParagraph}) => orderParagraph};
    max-width: 395px;
    @media screen and (max-width: 768px) {
        padding: 71px 16px 0;
        width: 100%;
        position: absolute;
        z-index: 2;
        bottom: -72px;
        background: linear-gradient( 180deg, rgba(243, 247, 248, 0) 0%, #F3F7F8 46.35%);
    }
    h2 {
        margin-bottom: 8px;
        font-size: 24px;
    }
    & > p {
        font-size: 14px;
        /* @media screen and (max-width: 768px) {
            margin-bottom: 48px;
        } */
    }
`
const ImageContainer = styled.div`
    order: ${({orderImg}) => orderImg};
    & > img {
        width: 90%;
        min-width: 292px;
        max-width: 311px;
    }
    @media screen and (max-width: 767px) { 
        /* padding: 0 30px */
    }
`
const ActivityItem = ({title, text, img, orderParagraph, orderImg, padding}) => {
    return (
        <ActivityContainer padding={padding}>
            <Paragraph orderParagraph={orderParagraph}>
                <h2>{title}</h2>
                <p>{text}</p>
            </Paragraph>
            <ImageContainer orderImg={orderImg}>
                <img src={img} alt="play-img" />
            </ImageContainer>
        </ActivityContainer>
    )
}

export default ActivityItem
