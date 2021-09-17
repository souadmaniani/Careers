import styled from 'styled-components'

export const Section = styled.section`
    background-color: ${({theme}) => theme.color.primaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Help = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    padding-top: 92px;
    & > h1 {
        margin-bottom: 21px;
    }
    & > p {
        font-size: 22px;
        margin-bottom: 20px;
    }
    & > div {
        margin: 24px 0 42px;
        width: 288px;
        height: 3px;
        background-color: ${({theme}) => theme.color.border};
    }
`
export const Button = styled.button`
    color: ${({theme}) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.primary};
    padding: 12px 73px;
    gap: 8px;
    border-radius: 2px;
   
`