import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import Logo from '../../assets/images/LogoWhite.svg'
import fb from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import { Link } from "react-router-dom";
import useWindowDimensions from '../windowDimension'
const FooterData=[
    {
        title: "Visit us",
        text1:"115 W 27th St",
        text2:"New York",
        text3:"NY 10001",
        link1:"/",
        link2:"/",
        link3:"/",
    },
    {
        title: "Dandy",
        text1:"Home",
        text2:"Products",
        text3:"Careers",
        link1:"/",
        link2:"/Products",
        link3:"/Careers",
    },
    {
        title: "Practices",
        text1:"Join us",
        text2:"Log into portal",
        link1:"/getStarted",
        link2:"/login",
        link3:"/",
    },
    {
        title: "Legal",
        text1:"Privacy policy",
        text2:"Terms of service ",
        text3:"Remake warranty",
        link1:"/",
        link2:"/",
        link3:"/",

    },
]
const FooterSection = styled.div`
    background-color: #18181A;
`
const NewContainer = styled(Container)`
    @media screen and (max-width: 768px){
        padding: 0;
    }

`
const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    border-bottom: 1px solid white;
    padding-bottom: 16px;
    padding-top: 24px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding-top: 0;
        gap: 2px;
    }
`
const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 0 80px 41px;
    width: calc(100% - 45px);
    color: white;
    &:hover{
        background-color: rgba(255,255,255,0.1);
    }
    p {
        font-family: "Poppins Medium";
        font-size: 24px;
        z-index: 2;
    }
    @media screen and (max-width: 768px){
        padding: 22px 0 26px 16px;
        margin-right: 16px;
        width: calc(100% - 16px);
        flex-direction: row;
        gap: 10%;
        p {
            font-size: 18px;
        }
    }
`

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    color: white;
    p {
        font-size: 16px;
    }
    @media screen and (max-width: 768px){
        padding: 24px 16px;
        gap: 10%;
    }
`
const Icons = styled.div`
    display: flex;
    gap: 22px;
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${({index, width}) => index !== 2 && width <=768 ? `30px` : 0 };
`
const LinkItem = styled(Link)`
    color: white;
    font-family: 'Poppins Regular';
    padding: 8px 0;
    align-self: flex-start;
    &:hover {
        color: ${({theme}) => theme.color.primary}
    }
`
const IconsRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 68%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 24px;
    }
`
const LogoItem = styled(Link)`
    color: white;
    padding: 8px 0;
    align-self: flex-start;
    & > img {
        width: 85px;
        height: 16px;
    }
`

const Footer = () => {
    const { width } = useWindowDimensions();
    return (
        <FooterSection>
            <NewContainer>
                <FooterContainer>
                    {
                        FooterData.map((item, index)=> {
                            return (
                                <FooterItem key={index}>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                    <Links index={index} width={width}>
                                        <LinkItem to={item.link1}>{item.text1}</LinkItem>
                                        <LinkItem to={item.link2}>{item.text2}</LinkItem>
                                        <LinkItem to={item.link3}>{item.text3}</LinkItem>
                                    </Links>
                                </FooterItem>
                            );
                        })
                    }
                </FooterContainer>
                <FooterBottom>
                    <LogoItem to="/"><img src={Logo} alt="Logo" /></LogoItem>
                    <IconsRight>
                        <div>
                            <p>?? 2020 Dandy. Inc, All Rights Reserved.</p>
                        </div>
                        <Icons>
                            <LinkItem to="/"><img src={twitter} alt="twitter" /></LinkItem>
                            <LinkItem to="/"><img src={linkedin} alt="linkedin" /></LinkItem>
                            <LinkItem to="/"><img src={fb} alt="fb" /></LinkItem>
                            <LinkItem to="/"><img src={instagram} alt="insta" /></LinkItem>
                        </Icons>
                    </IconsRight>
                </FooterBottom>
            </NewContainer>
        </FooterSection>
    )
}

export default Footer
