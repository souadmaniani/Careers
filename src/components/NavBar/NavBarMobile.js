import React from 'react'
import styled from "styled-components";
const Nav = styled.div`
    /* display: flex;
    flex-direction: column; */
    /* align-items: center;
    justify-content: center; */
    width:100%;
    background-color: red;
`

const NavBarMobile = () => {
    return (
        <Nav>
            {/* <p>hellooo</p> */}
            <h1>wesh</h1>
            {/* <span>test</span> */}
        </Nav>
    )
}

export default NavBarMobile
