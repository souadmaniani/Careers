import React from 'react'
import {Container} from '../../GlobalStyles'
import Paragraph from '../Paragraph'
import styled from 'styled-components'
import { Benefits } from './BenefitsData'
import BenefitsItem from './BenefitsItem'

const WorkHappierSection = styled.div`
    background-color: ${({theme}) => theme.color.primaryBg};
`
const WorkHappierContainer = styled.div`

`
const BenefitsContainer = styled.div`

`

const WorkHappier = () => {
    return (
        <WorkHappierSection>
            <Container>
                <WorkHappierContainer>
                    <Paragraph title="Work happier..."
                    text="TBD: We offer amazing benefits to ensure that our team is healthy, happy, and excited to make a difference."/>
                <BenefitsContainer>
                {
                    Benefits.map((item, index)=> {
                        return (
                            <BenefitsItem icon={item.icon} title={item.title} text={item.text} />
                        )
                    })
                }
                </BenefitsContainer>
                </WorkHappierContainer>
            </Container>
        </WorkHappierSection>
    )
}

export default WorkHappier
