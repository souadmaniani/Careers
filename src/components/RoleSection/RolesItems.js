import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import styled from 'styled-components';
import DropDown from './DropDown';

const RolesData = [
    {
        roleName: "Account Management",
        roleLocation: "NYC, Remote",
        numberAvailable: "7 Available"
    },
    {
        roleName: "Data, Engineering & Product",
        roleLocation: "NYC, Remote",
        numberAvailable: "10 Available"
    },
    {
        roleName: "Marketing",
        roleLocation: "NYC, Remote",
        numberAvailable: "9 Available"
    },
    {
        roleName: "Operations",
        roleLocation: "NYC, Remote",
        numberAvailable: "23 Available"
    },
    {
        roleName: "Revenue Operations",
        roleLocation: "NYC, Remote",
        numberAvailable: "6 Available"
    },
    {
        roleName: "Sales",
        roleLocation: "NYC, Remote",
        numberAvailable: "31 Available"
    },
    {
        roleName: "Talent",
        roleLocation: "NYC, Remote",
        numberAvailable: "10 Available"
    },
]
const RolesItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

`
const RoleItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme}) => theme.color.border};
    gap: 50px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 8px;
        gap: 8px;
        h4 {
            align-self: flex-start;
        }
    }
    
`
const LocationAvailable = styled.div`
    display: flex;
    gap: 32px;
    font-size: 16px;
    p { 
        color: ${({theme}) => theme.color.lighterText};
        font-size: 16px;
        font-family: "Poppins Medium";
    }
    @media screen and (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
    }
    `
const DropdownButton = styled.div`
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    span {
        font-size: 16px;
        font-family: "Poppins Medium";
        line-height: 24px;
    }
`
const RolesItems = () => {
    const [arr, setarr] = useState([false, false, false, false, false, false, false]);
    
    const handleClick = (index)=>{
        let newArr = [...arr];
        newArr[index] = !arr[index];
        setarr(newArr);
    }
    return (
        <RolesItemsContainer>
        {
            RolesData.map((item, index)=> {
                return (
                    <div key={index}>
                        <RoleItem >
                            <h4>{item.roleName}</h4>
                            <LocationAvailable>
                                <p>{item.roleLocation}</p>
                                <DropdownButton onClick={() => handleClick(index)}>
                                    <span>{item.numberAvailable}</span> 
                                    {   arr[index] ?  <AiOutlineUp style={{marginLeft: "20px"}}/> :
                                        <AiOutlineDown style={{marginLeft: "20px"}}/> 
                                    }
                                </DropdownButton>
                            </LocationAvailable>
                        </RoleItem>
                        { arr[index] && <DropDown /> }
                    </div>
                )
               
            })
        }
        </RolesItemsContainer>
    )
}

export default RolesItems
