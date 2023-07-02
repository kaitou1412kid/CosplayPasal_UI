import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color : teal;
    height : 30px;
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
    font-weight : 500;
`


const Announcement = () => {
  return (
    <Container>
        SALE! SALE! SALE!! Free Shipping over order of Rs.1000
    </Container>
  )
}
export default Announcement