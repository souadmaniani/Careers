import React from 'react'
import Categories from './Categories';
import { Section, Help, Button, SectionContainer } from "./style";
import Women1 from '../../assets/images/women1.png'
import Women2 from '../../assets/images/women2.png'
import Women3 from '../../assets/images/women3.png'
import Women4 from '../../assets/images/women4.png'
import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import styled from 'styled-components';

const Image1 = styled.img`
    position: absolute;
    top: 40px;
    left: 84px;
`
const Image2 = styled.img`
    position: absolute;
    top: 169px;
    right: 82px;
    `
const Image3 = styled.img`
    position: absolute;
    bottom: 100px;
    right: 50px;
`
// const Image4 = styled.img`
//     position: absolute;
//     top: 40px;
//     right: 72px;
// `
const SmileSection = () => {
    return (
        <Section>
            <SectionContainer>
                <Help>
                    <h1>Help us put a smile on people’s faces</h1>
                    <p>Dandy uses cutting-edge tech to empower dentists give their patients a smile they’re proud of.</p>
                    <Button>Jump to 96 open roles</Button>
                    <div></div>
                    <Image1 src={Women1} alt="women1" />
                    <Image2 src={Women2} alt="women2" />
                    <Image3 src={Women3} alt="women3" />
                    {/* <Image4 src={Women4} alt="women4" />
                    <Image5 src={Man1} alt="man1" />
                    <Image6 src={Man2} alt="man2" /> */}
                </Help>
                <Categories />
            </SectionContainer>
        </Section>
    )
}

export default SmileSection
