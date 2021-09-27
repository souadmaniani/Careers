import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
const FooterData=[
    {
        title: "Visit us",
        text1:"115 W 27th St",
        text2:"New York",
        text3:"NY 10001",
    },
    {
        title: "Dandy",
        text1:"Home",
        text2:"Products",
        text3:"Careers",
    },
    {
        title: "Practices",
        text1:"Join us",
        text2:"Log into portal",
    },
    {
        title: "Legal",
        text1:"Privacy policy",
        text2:"Terms of service ",
        text3:"Remake warranty",
    },
]
const FooterSection = styled.div`
    background-color: #18181A;
`
const FooterContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
`
const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 48px ;
    padding-left: 41px;
    width: 20%;
    color: white;
    &:hover{
        background: #FFFFFF;
        opacity: 0.1;
    }
    p {
        font-family: "Poppins Medium";
        font-size: 24px;
        
    }
`
const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterContainer>
                    {
                        FooterData.map((item, index)=> {
                            return (
                                <FooterItem key={index}>
                                    <p>{item.title}</p>
                                    <label>{item.text1}</label>
                                    <label>{item.text2}</label>
                                    <label>{item.text3}</label>
                                </FooterItem>
                            );
                        })
                    }
                </FooterContainer>
            </Container>
        </FooterSection>
    )
}

export default Footer
