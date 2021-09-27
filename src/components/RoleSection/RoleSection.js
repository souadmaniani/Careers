import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import { BsSearch } from 'react-icons/bs'
import LocationsItems from './LocationsItems'
import Paragraph from '../Paragraph'
import RolesItems from './RolesItems'
import useWindowDimensions from '../windowDimension'

const RoleSectionContainer= styled.div`
    background-color: ${({theme}) => theme.color.white};
`
const NewContainer = styled(Container)`
    padding: 80px 152px 79px;
    @media screen and (max-width: 1300px) {
        padding: 80px 120px 79px;
    }
    @media screen and (max-width: 768px) {
        padding: 56px 16px 60px;
    }
`
const Roles = styled.div`
    display: flex;
    gap: 72px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`
const Locations = styled.div`
    form {
        background: #F7F7F9;
        padding: 16px 20px;
        display: flex;
        margin: 16px 0 49px;
        button {
            margin-right: 22px;
            background: #F7F7F9;
        }
        input {
            background: #F7F7F9;
        }
    }
    @media screen and (max-width: 768px) {
        form {
            margin: 16px 0;
        }
    }
`

const RoleSection = () => {

    const handleSubmit=(e)=> {
        e.preventDefault();
    }
    const { width } = useWindowDimensions();

    return (
        <RoleSectionContainer>
            <NewContainer>
                {
                    width <= 768 ? <Paragraph pWidth="100%" mb="8px" fontSize="18px" color="#8B8B8C" margin="0 0 32px"
                            title="What are you waiting for? Find your role"
                            text="Work on revolutionizing the dental industry from your home, the NYC office, the beach or somewhere in between. You decide!"
                        /> : 
                        <Paragraph pWidth="89%" mb="8px" fontSize="20px" color="#8B8B8C" margin="0 0 64px"
                            title="What are you waiting for? Find your role"
                            text="Work on revolutionizing the dental industry from your home, the NYC office, the beach or somewhere in between. You decide!"
                        />
                }
                <Roles>
                    <Locations>
                        <h4>96 Available Roles</h4>
                        <form onSubmit={handleSubmit} > 
                            <button type="submit">
                                <BsSearch style={{color: "#8b8b8c", fontSize:"16px"}}/>
                            </button>
                            <input  type="text"
                                    // value={value}
                                    // onChange={handleChange}
                                    placeholder="Search through roles"
                            />
                        </form>
                        <LocationsItems />
                    </Locations>
                    <RolesItems />
                </Roles>
            </NewContainer>
        </RoleSectionContainer>
    )
}

export default RoleSection
