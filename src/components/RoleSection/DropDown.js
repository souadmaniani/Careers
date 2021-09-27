import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight } from "react-icons/ai";
const DropDownItems = [
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
    {
        content: "Content Marketing Manager",
        location: "NYC, Remote"
    },
]

const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 10px;
    padding-top: 16px;
`
const DropDownItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.color.border};
    gap: 50px;
    p {
        font-size: 14px;
        color: ${({theme}) => theme.color.primary};
        margin-right: 13px;
        font-family: "Poppins Medium";
    }
    span {
        font-size: 14px;
        color: ${({theme}) => theme.color.lighterText};
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: flex-start;
        gap: 8px;
        padding-bottom: 11px;
    }
`
const DropDownContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    @media screen and (max-width: 768px){
        justify-content: space-between;
    }
`
const DropDown = () => {
    return (
        <DropDownContainer>
            {
                DropDownItems.map((item, index) => {
                    return (
                        <DropDownItem key={index}>
                            <DropDownContent>
                                <p>{item.content}</p>
                                <AiOutlineArrowRight style={{color: "#4CCFAD"}}/>
                            </DropDownContent>
                            <span>{item.location}</span>
                        </DropDownItem>
                    )
                })
            }
        </DropDownContainer>
    )
}

export default DropDown
