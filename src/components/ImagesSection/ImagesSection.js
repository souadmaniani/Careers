import React from 'react'
import BigImg from '../../assets/images/BigImg.png'
import SmallImg from '../../assets/images/SmallImg.png'
import TopImg from '../../assets/images/TopImg.png'
import BottomImg from '../../assets/images/BottomImg.png'
import { Container } from '../../GlobalStyles'
import styled from 'styled-components'
import useWindowDimensions from '../windowDimension'

const ImgsSection = styled.div`
    background-color: white;
`
const NewContainer = styled(Container)`
    padding: 80px 132px;
    @media screen and (max-width: 767px) {
        padding: 56px 24px;
    }
`
const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        position: relative;
    }
`
const BigImage = styled.img`
    width: 67%;
    @media screen and (max-width: 767px) {
        width: 90%;
        position: relative;
    }
`
const SmallImage = styled.img`
    width: 27%;
    object-fit: cover;
    @media screen and (max-width: 767px) {
        width: 90%;
        align-self: flex-end;
        position: absolute;
        top: 71%;
    }
`
    
const ImagesSection = () => {
    const { width } = useWindowDimensions();
    return (
        <ImgsSection>
            <NewContainer>
                <ImagesContainer>
                    <BigImage src={(width <= 768) ? TopImg : BigImg} alt="BigImg" />
                    <SmallImage src={(width <= 768) ? BottomImg : SmallImg} alt="SmallImg" />
                </ImagesContainer>
            </NewContainer>
        </ImgsSection>
    )
}

export default ImagesSection
