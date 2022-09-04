import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: ${props => props.backgroundColor};
  padding-right: 15px;
`

export const TabsItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`

export const Head = styled.label`
  font-family: 'roboto';
  font-weight: 400;
  margin-left: 8px;
  color: ${props => props.textColor};
`
export const Tab = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #7e858e;
`
export const SideBarHeadBelow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const HeaderBelow = styled.p`
    font-family : 'roboto'
    font-size : '5px ';
    color : ${props => props.textColor}
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SocialImage = styled.img`
  width: 35px;
  margin: 5px;
  height: 35px;
`
export const BelowContent = styled.p`
  font-family: 'roboto';
  color: ${props => props.textColor};
`
