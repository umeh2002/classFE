import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <Main>
            <Logo>UeMh</Logo>
            <Button to="/create-article">create article</Button>
        </Main>
    </Container>
  )
}

export default Header

const Button =styled(Link)`
width: 130px;
height: 30px;
border-radius: 5px;
border: 1px solid black;
font-weight: 700;
outline: none;
text-decoration: none;
display: flex;
justify-content: center;
background-color: black;
color: white;
align-items: center;
transition: all 400ms;

:hover{
    cursor: pointer;
}
`

const Logo =styled.div`
font-size: 30px;
font-weight: 700;
font-family: poppins;
`

const Main =styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container =styled.div`
width: 100%;
height: 70px;
border-bottom: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`