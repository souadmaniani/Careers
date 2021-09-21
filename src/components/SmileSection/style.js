import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const Section = styled.section`
    background-color: ${({theme}) => theme.color.primaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SectionContainer = styled(Container)`
    position: relative;
`
export const Help = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 92px;
`
export const Border = styled.div`
        margin: 24px 0 42px;
        width: 288px;
        height: 3px;
        background-color: ${({theme}) => theme.color.border};
`
export const Image = styled.img`
    position: absolute;
    @media screen and (max-width: 1260px) {
    }
`