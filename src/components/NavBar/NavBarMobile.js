import React , { useState, useEffect } from 'react'
import styled from "styled-components";
import { Container, ButtonStarted } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { FaTimes, FaBars} from "react-icons/fa";
import { AiOutlineDown } from 'react-icons/ai';
import Logo  from '../../assets/images/Logo.svg'
import DropDown from "./DropDown";


const Nav = styled.nav`
    background-color: ${({theme}) => theme.color.primaryBg};
`
const NavBarContainer = styled(Container)`
    padding: 0 16px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavLogo = styled(Link)`
    & > img {
        width: 86px;
        height: 16px;
        background-size: contain;
    }
`
const MobileIcon = styled.div`
`
const NavMenu = styled.ul`
    z-index: 2;
    position: absolute;
    top: 56px;
    ${({iconClick}) => iconClick ? `left: 0` : `left: -100%`};
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.color.primaryBg};
    transition: all 1s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  
`
const NavItem = styled.li`
    &:first-child {
        margin-top: 2rem;
    }
    padding: 2rem 0 1rem;
    position: relative;
    &:hover {
        ${({dropdown}) => !dropdown &&
        `border-bottom: 3px solid #4ccfad;`}
    }
`
const NavLink = styled(Link)`
    font-size:${({theme}) => theme.fontSize.re};
    display: flex;
    height: 100%;
    color: ${({theme}) => theme.color.text};
    font-family: 'Poppins Regular';
    &:hover {
        color: ${({theme}) => theme.color.primary}
    }
   
`
const LogLink = styled(Link)`
    font-size:${({theme}) => theme.fontSize.re};
    color: ${({theme}) => theme.color.lighterText};
    text-align: center;
    width: 100%;
    margin: 32px 0 64px;
`
const Button = styled(ButtonStarted)`
    font-size:${({theme}) => theme.fontSize.re};
    width: 90%;
`
const NavBarMobile = ({dropdown, setdropdown}) => {
    const [iconClick, setIconClick] = useState(false);
    const [linkClick, setLinkClick] = useState(false);
    const handleIconClick=()=> {
        setIconClick(!iconClick);
    }
    const handleClick=()=>{
        setdropdown(!dropdown);
    }
    const closeDropDown = ()=>{
        setdropdown(false);
        setLinkClick(!linkClick);
    }

    useEffect(() => {
        setIconClick(false);
    }, [linkClick]);

    return (
        <Nav>
            <NavBarContainer>
                <NavLogo to='/' onClick={closeDropDown}>
                    <img src={Logo} alt="DANDY" />
                </NavLogo>
                <MobileIcon onClick={handleIconClick}>
                    {iconClick ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu iconClick={iconClick}>
                    <NavItem>
                        <NavLink to='/' onClick={closeDropDown}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/digital' onClick={closeDropDown}>Go digital</NavLink>
                    </NavItem>
                    <NavItem dropdown={dropdown}>
                        <NavLink to='/' onClick={handleClick}>
                            Company
                        <AiOutlineDown style={{marginLeft: "0.5rem"}}/>
                        </NavLink>
                        {dropdown && <DropDown closeDropDown={closeDropDown} /> }
                    </NavItem>
                    <LogLink to='/login' onClick={closeDropDown}>Log into portal</LogLink>
                    <Button to='/getStarted' onClick={closeDropDown}>Get Started</Button>
                </NavMenu>
            </NavBarContainer>
        </Nav>
    )
}

export default NavBarMobile
