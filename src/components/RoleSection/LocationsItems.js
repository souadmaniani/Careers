import React from 'react'
import styled from 'styled-components'
import {Carousel} from 'react-responsive-carousel'
import useWindowDimensions from '../windowDimension'
const LocationsData= [
    "Remote (USA)",
    "Remote (Global)",
    "New  York City, NY",
    "New  York City, NY",
    "New  York City, NY"
]
const NewCarousel = styled(Carousel)`
    li {
        min-width: 40% !important;
        text-align: start !important;
        label {
            font-size: 16px;
            font-family: "Poppins Medium";
        }
        & > p {
            color: ${({theme}) => theme.color.lighterText};
            font-size: 16px;
            font-family: "Poppins Medium";
        }
    }
`
const LocationItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
        font-size: 16px;
        font-family: "Poppins Medium";
    }
    & > p {
        color: ${({theme}) => theme.color.lighterText};
        font-size: 16px;
        font-family: "Poppins Medium";
    }
`

const LocationsItems = () => {
    const {width} = useWindowDimensions();
    return (
        <>
        {
            width <= 768 ?
            <NewCarousel autoPlay={false} showIndicators={false} showStatus={false} showArrows={false} width={width}>
                <label>All Locations</label>
                {
                    LocationsData.map((item, index)=> {
                        return (
                            <p key={index} >{item}</p>
                        )
                    })
                }
            </NewCarousel> :
            <LocationItems>
                <label>All Locations</label>
                {
                    LocationsData.map((item, index)=> {
                        return (
                            <p key={index} >{item}</p>
                        )
                    })
                }
            </LocationItems>
        }
        </>
    )
}

export default LocationsItems
