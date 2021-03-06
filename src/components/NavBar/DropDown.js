import React from 'react';
import styled from 'styled-components';
import { DropDownItems } from "./DropDownItems";
import { Link } from 'react-router-dom';

const DropDownMenu = styled.ul`
    z-index: 2;
    background-color: ${({theme}) => theme.color.white};
    position: absolute;
    padding: 0.5rem;
    border: 1px solid ${({theme})=> theme.color.border};
    border-radius: 5px;
    width: 100%;
    top: 70px;
    left: 1rem;
`
const DropDownItem = styled.li`
    &:not(:first-child) {
        padding-top: 1rem;
    }
    
`
const DropDownLink = styled(Link)`
    color: ${({theme}) => theme.color.text};
    &:hover {
        color: ${({theme}) => theme.color.primary}
    }
`

const DropDown = ({closeDropDown}) => {
    return (
        <DropDownMenu>
            {
            DropDownItems.map((item, index)=> { return (
                <DropDownItem key={index}>
                    <DropDownLink to={item.path} onClick={closeDropDown}>{item.title}</DropDownLink>
                </DropDownItem>
            )
            })}
        </DropDownMenu>
    )
}

export default DropDown


