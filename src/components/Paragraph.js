import React from 'react'
import styled from 'styled-components'

export const Parag = styled.div`
    max-width: ${({maxWidth}) => maxWidth};
    margin: ${({margin})=> margin};
    & > h1 {
        margin-bottom: ${({mb}) => mb};
    }
    & > p {
        font-size: ${({fontSize}) => fontSize};
        width: ${({pWidth}) => pWidth};
        color: ${({color}) => color};
}
`

const Paragraph = ({title, text, maxWidth, mb, fontSize, margin, pWidth, color}) => {
    return (
        <Parag maxWidth={maxWidth} mb={mb} fontSize={fontSize}
            margin={margin}  pWidth={pWidth} color={color}>
            <h1>{title}</h1>
            <p>{text}</p>
        </Parag>
    )
}

export default Paragraph
