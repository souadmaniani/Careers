import React from 'react'
import { Container } from '../../GlobalStyles'
import Categories from './Categories';
import { Section, Help, Button } from "./style";

const SmileSection = () => {
    return (
        <Section>
            <Container>
                <Help>
                    <h1>Help us put a smile on people’s faces</h1>
                    <p>Dandy uses cutting-edge tech to empower dentists give their patients a smile they’re proud of.</p>
                    <Button>Jump to 96 open roles</Button>
                    <div></div>
                </Help>
                <Categories />
            </Container>
        </Section>
    )
}

export default SmileSection
