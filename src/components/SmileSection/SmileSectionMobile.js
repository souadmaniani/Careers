import React from 'react'
import styled from 'styled-components'
import Paragraph from '../Paragraph'
import ButtonRole from './ButtonRole'
import { Container} from "../../GlobalStyles";
import { ImagesMobile } from './ImagesMobile';
import useWindowDimensions from '../windowDimension';
import Categories from './Categories'

const HelpMobileContainer = styled(Container)`
    text-align: center;
    margin-bottom: 24px;
`
const HelpMobile = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const ImagesContainer = styled.div`
    position: relative;
    min-height: 158px;
    width: ${({width}) => width >=510 ? `60%` : `100%`};
    margin-top: 44px;
`
const Image = styled.img`
    position: absolute;
    display: inline-block;
`
const Border = styled.div`
    margin: ${({forNav}) => forNav ? `0` : `32px 0 24px`};
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.color.border};
`
const SmileSectionMobile = () => {
    const { width } = useWindowDimensions();
    return (
        <>
        <HelpMobileContainer width={width}>
            <Border forNav={true}></Border>
            <HelpMobile>
                <Paragraph mb="16px" margin="32px 0 24px" title="Help us put a smile on people’s faces"
                    text="Dandy uses cutting-edge tech to empower dentists give their patients a smile they’re proud of."
                />
                <ButtonRole padding="12px 0" width="100%"/>
                <ImagesContainer width={width}>
                {
                    ImagesMobile.map((item, index) =>  { return (
                        <Image  width={width}  key = {index} src= {item.src} alt={item.alt}
                            style={{top: item.top, bottom: item.bottom,
                            left: item.left, right:item.right, width: item.width, height: item.height
                            }}  />
                    )})
                }
                </ImagesContainer>
            </HelpMobile>
            <Border></Border>
            <p>Or select one of the categories below to quickly see available jobs by department</p>
        </HelpMobileContainer>
        <Categories />
        </>
    )
}

export default SmileSectionMobile
