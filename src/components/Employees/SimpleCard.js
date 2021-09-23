import React from 'react'
import styled from 'styled-components'
import Union from '../../assets/images/Union.svg'
import Union2 from '../../assets/images/Union2.svg'

const SimpleCardContainer = styled.div`
  position: relative;
  padding: ${({text}) => text ? `14.5px 15px` : `0`};
  border: ${({text}) => text ? `solid 0.8px #f3f7f8` : `0` };
  background-color: ${({theme}) => theme.color.primaryBg};
  border-radius: 22px;
  width: 100%;
  & > p {
      font-size: 18px;
  }
  & > img:first-child {
    visibility: ${({yes}) => yes ? `visible` : `hidden`};
    position: absolute;
    right: -11px;
    bottom: -2px;
    width: auto !important;
  }
  & > img:nth-child(2) {
    visibility: ${({yes2}) => yes2 ? `visible` : `hidden`};
    position: absolute;
    left: 0px;
    bottom: -13px;
    width: auto !important;
  }
  & > img:nth-child(3) {
    visibility: ${({yes3}) => yes3 ? `visible` : `hidden`};
    position: absolute;
    right: -11px;
    bottom: -13px;
    width: auto !important;
  }
`
const SimpleCard = ({children, yes, yes2, yes3, text}) => {
  console.log(yes, yes2, yes3);
    return (
        <SimpleCardContainer  yes={yes} yes2={yes2} yes3={yes3} text={text}>
            <img src={Union} alt="" />
            <img src={Union2} alt="" />
            <img src={Union} alt="" />
            {children}
        </SimpleCardContainer>
    )
}

export default SimpleCard
