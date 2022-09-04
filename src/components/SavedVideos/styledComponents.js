import styled from 'styled-components'
// import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HeadItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.back};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
  background-color: ${props => props.bgColor};
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`

export const Heading = styled.h1`
  color: black;
  font-size: 30px;
  margin: 15px;
  color: ${props => props.color};
`

export const Desc = styled.p`
  color: black;
  font-size: 20px;
  margin-left: 15px;
  color: ${props => props.color};
`
