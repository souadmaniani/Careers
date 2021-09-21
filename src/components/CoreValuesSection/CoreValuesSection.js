import React from 'react'
import Paragraph from '../Paragraph'
import {Container} from '../../GlobalStyles'
import styled from 'styled-components'
import Card from './Card'
import { CardsItems } from './CardsItems'
import { isMobile } from 'react-device-detect'
import CoreSectionMobile from './CoreSectionMobile'

const CardsSection = styled.div`
    @media screen and (max-width: 768px) {
        margin-top: 8.5rem;
    }
`
const NewContainer = styled(Container)`
    padding: 0px 132px 80px;
`
const Cards = styled.div`
    display: flex;
    gap: 26px;
    flex-wrap: wrap;
`

const CoreValuesSection = () => {
    return (
        <CardsSection>
            { isMobile ? <CoreSectionMobile /> :

                <NewContainer>
                    <Paragraph mb="8px" pWidth="68%" margin="0 0 40px"
                        title="Dandians live by our core values"
                        text="And if you do too, you might have the secret recipe required to be a great Dandian yourself!"
                    />
                    <Cards>
                        {
                            CardsItems.map((item, index)=> { return ( 
                                <Card key={index} emoji={item.emoji} title={item.title} content={item.content} />
                            ) } )
                        }
                    </Cards>
                </NewContainer>
            }
        </CardsSection>
    )
}

export default CoreValuesSection
