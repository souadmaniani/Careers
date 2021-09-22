import React from 'react'
import Categories from './Categories';
import { Section, Help, SectionContainer, Image, Border } from "./style";
import { Images } from "./Images";
import ButtonRole from "./ButtonRole";
import SmileSectionMobile from "./SmileSectionMobile";
import Paragraph from '../Paragraph'
import useWindowDimensions from '../windowDimension';
const SmileSection = () => {
  const { width } = useWindowDimensions();
    return (
        <Section>
            { width <= 768 ? <SmileSectionMobile /> :
            <SectionContainer>
                <Help>
                    <Paragraph maxWidth="49%" mb="21px" margin="0 0 20px"
                        title="Help us put a smile on people’s faces"
                        text="Dandy uses cutting-edge tech to empower dentists give their patients a smile they’re proud of."
                    />
                    <ButtonRole padding="20px 83px"/>
                    <Border></Border>
                    <div>
                    {
                        Images.map((item, index)=>  {return (
                            <Image key = {index} src= {item.src} alt={item.alt} style=
                                {{top: item.top, bottom: item.bottom, left: item.left, right:item.right }}
                            />
                        )})
                    }
                    </div>
                </Help>
                <Categories />
            </SectionContainer>
            }
        </Section>
    )
}

export default SmileSection
