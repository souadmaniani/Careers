import React, {useState} from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import Dropdown from '../NavBar/DropDown'
import styled from 'styled-components'

export const Button = styled.button`
    position: relative;
    color: ${({theme}) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.primary};
    padding: ${({padding}) => padding};
    gap: 8px;
    border-radius: 2px;
    width: ${({width}) => width};;
`

const ButtonRole = ({padding, width}) => {
    const [dropdown, setdropdown] = useState(false);
    const handleClick=()=> {
        setdropdown(!dropdown);
    }
    return (
        <Button padding={padding} width={width} onClick={handleClick}>Jump to 96 open roles
            <AiOutlineDown />
            {dropdown && <Dropdown />}
        </Button>
    )
}

export default ButtonRole
