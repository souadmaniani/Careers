import React, {useState, useEffect} from 'react'
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem,
        NavLink, LogLink, ButtonStarted, RightSide, LeftSide } from "./style";
import Logo  from '../../assets/images/Logo.svg'
import { AiOutlineDown } from 'react-icons/ai';
import DropDown from "./DropDown";
import { FaTimes, FaBars } from "react-icons/fa";
import {
    // BrowserView,
    // MobileView,
    // isBrowser,
    isMobile
  } from "react-device-detect";
import styled from 'styled-components';
// const IpadIcon = styled.div`
//     display: none;
//     @media (max-width: 768px) {
//         display: block;
//   }
// `

import NavBarMobile from './NavBarMobile'
const NavBar = () => {
    const [dropdown, setdropdown] = useState(false);
    const handleClick=()=>{
        setdropdown(!dropdown);
    }
    const closeDropDown = ()=>{
        setdropdown(false);
    }
    const [iconClick, setIconClick] = useState(false);
    const handleIconClick=()=> {
        setIconClick(!iconClick);
    }
    return (
        <>
            { isMobile ?<NavBarMobile />:
            <Nav>
                <NavBarContainer>
                    <RightSide>
                        <NavLogo to='/'>
                            <img src={Logo} alt="DANDY" />
                        </NavLogo>
                        {/* <IpadIcon onClick={handleIconClick}>
                            {iconClick ? <FaBars /> : <FaTimes />}
                        </IpadIcon> */}
                        <NavMenu click={iconClick}>
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
                                {dropdown && <DropDown /> }
                            </NavItem>
                        </NavMenu>
                    </RightSide>
                    <LeftSide>
                        <LogLink to='/login'>Log into portal</LogLink>
                        <ButtonStarted to='/getStarted'>Get Started</ButtonStarted>
                    </LeftSide>
                </NavBarContainer>
            </Nav>
            }
        </>
    )
}

export default NavBar
