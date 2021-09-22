import React from 'react'
import sara from '../../assets/images/sara.png'
import styled from 'styled-components'
import SimpleCard from './SimpleCard'
import CardHeader from './CardHeader'

const EmployeContainer = styled.div`

`
const EmployeInfo = styled.div``
const EmployeImage = styled.img``

const Employes = () => {
    return (
        <EmployeContainer>
            <CardHeader EmployeName="Sara Myers" EmployeJob="Fulfillment"/>
            <SimpleCard>
                <p>Working at Dandy is the best, because I’m constantly pushed to think outside the box, work smarter (and sometimes harder), knowing i’m creating value for dentists (thus patients around the US). </p>
            </SimpleCard>
            {/* <EmployeInfo />
            <EmployeImage src={sara} alt="sara" /> */}
        </EmployeContainer>
    )
}

export default Employes
