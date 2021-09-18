import React from 'react'
import Categories from './Categories';
import { Section, Help, Button, SectionContainer, Image } from "./style";
import { Images } from "./Images";

const SmileSection = () => {
    return (
        <Section>
            <SectionContainer>
                <Help>
                    <h1>Help us put a smile on people’s faces</h1>
                    <p>Dandy uses cutting-edge tech to empower dentists give their patients a smile they’re proud of.</p>
                    <Button>Jump to 96 open roles</Button>
                    <div></div>
                    <>
                    {
                        Images.map((item, index)=>  {return (
                            <Image key = {index} src= {item.src} alt={item.alt}
                                style={{top: item.top, bottom: item.bottom, left: item.left, right:item.right }} />
                        )})
                    }
                    </>
                </Help>
                <Categories />
            </SectionContainer>
        </Section>
    )
}

export default SmileSection
