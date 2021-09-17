import React, {useState} from 'react'
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem,
        NavLink, LogLink, ButtonStarted, RightSide, LeftSide } from "./style";
import Logo  from '../../assets/images/Logo.svg'
import { AiOutlineDown } from 'react-icons/ai';
import DropDown from "./DropDown";

const NavBar = () => {
    const [dropdown, setdropdown] = useState(false);
    const handleClick=()=>{
        setdropdown(!dropdown);
    }
    const closeDropDown = ()=>{
        setdropdown(false);
    }
    return (
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
    )
}

export default NavBar

// navlogo: Link navIcon: icon
//menu :ul navitem: li navlink:Link
