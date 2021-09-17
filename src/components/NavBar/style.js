import styled from 'styled-components'
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.color.primaryBg};
    border-bottom: 1px solid ${({theme}) => theme.color.border};
`
export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
`
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LeftSide = styled.div`
    display: flex;
    align-items: center;
`
export const NavLogo = styled(Link)`
    display: inline-block;
    margin-right: 40px;

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
`
export const NavItem = styled.li`
    padding: calc((96px - 16px) /2) 0;
    position: relative;
    &:hover {
        border-bottom: ${({dropdown}) => dropdown && `3px solid ${({theme}) => theme.color.primary}`};
    }

`
export const NavLink = styled(Link)`
    display: flex;
    height: 100%;
    color: ${({theme}) => theme.color.text};
    padding:0 24px;
    font-family: 'Poppins Regular';
    &:hover {
        color: ${({theme}) => theme.color.primary}
    }
`
export const LogLink = styled(Link)`
    color: ${({theme}) => theme.color.lighterText};
    margin-right: 24px;
`
export const ButtonStarted = styled.button`
    color: ${({theme}) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.primary};
    padding: 12px 16px;
    font-family: 'Poppins Medium';
`

