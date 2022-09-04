import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  background-color: ${props => props.themeColor};
`

export const HeaderLogo = styled.img`
  height: 28px;
  width: 115px;
  margin-left: 10px;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 15%;
`

export const LogoutButton = styled.button`
  border-width: 1px;
  border-color: #3b82f6;
  color: #3b82f6;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  font-family: 'roboto';
  font-weight: 600;
  background-color: ${props => props.themeColor};
  color : ${props => props.textColor}
  border-color : ${props => props.textColor}
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 300px;
  height: 150px;
  border-radius: 10px;
`

export const Notification = styled.p`
    font-family : 'roboto'
    color : #000000 ;
    `

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 170px;
`
export const CancelButton = styled.button`
  color: #000000;
  border-width: 1px;
  border-radius: 2px;
  border-color: #475569;
  padding: 6px;
`

export const ConfirmButton = styled.button`
  color: #000000;
  border-width: 0px;
  padding: 7px;
  background-color: #3b82f6;
`
export const NavLink = styled(Link)``

export const DarkModeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`
