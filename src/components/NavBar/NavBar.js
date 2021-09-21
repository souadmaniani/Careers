import React, {useState} from 'react'
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem,
        NavLink, LogLink, RightSide, LeftSide } from "./style";
import Logo  from '../../assets/images/Logo.svg'
import { AiOutlineDown } from 'react-icons/ai';
import DropDown from "./DropDown";
import { isMobile} from "react-device-detect";
import { ButtonStarted } from '../../GlobalStyles'
import NavBarMobile from './NavBarMobile'
const NavBar = () => {
    const [dropdown, setdropdown] = useState(false);
    const handleClick=()=>{
        setdropdown(!dropdown);
    }
    const closeDropDown = ()=>{
        setdropdown(false);
    }
    
    return (
        <>
            { isMobile ?
            <NavBarMobile dropdown={dropdown} setdropdown ={ setdropdown}/>:
            <Nav>
                <NavBarContainer>
                    <RightSide>
                        <NavLogo to='/'>
                            <img src={Logo} alt="DANDY" />
                        </NavLogo>
                        <NavMenu>
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
