import React from 'react'
import styled from 'styled-components'
import Union from '../../assets/images/Union.svg'
import Union2 from '../../assets/images/Union2.svg'

const SimpleCardContainer = styled.div`
  position: relative;
  padding: 14.5px 0;
  border: solid 0.8px ${({theme}) => theme.color.primaryBg};
  background-color: ${({theme}) => theme.color.primaryBg};
  border-radius: 6px;
  & > p {
      font-size: 20px;
  }
  & > img:first-child {
    visibility: ${({yes}) => yes ? `visible` : `hidden`};
    position: absolute;
    right: -11px;
    bottom: -2px;
    background-color: red;
  }
  & > img:nth-child(2) {
    visibility: ${({yes2}) => yes2 ? `visible` : `hidden`};
    position: absolute;
    left: 0px;
    bottom: -22px;
    background-color: red;
  }
  & > img:nth-child(3) {
    visibility: ${({yes3}) => yes3 ? `visible` : `hidden`};
    position: absolute;
    right: -11px;
    bottom: -23px;
    background-color: red;
  }
`
const SimpleCard = ({children, yes, yes2, yes3}) => {
    return (
        <SimpleCardContainer  yes={yes} yes2={yes2} yes3={yes3}>
            <img src={Union} alt="" />
            <img src={Union2} alt="" />
            <img src={Union} alt="" />
            {children}
        </SimpleCardContainer>
    )
}

export default SimpleCard
