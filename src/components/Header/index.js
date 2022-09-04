import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {HiOutlineLightBulb} from 'react-icons/hi'
import NxtContext from '../../context/NxtContext'

import {
  NavContainer,
  HeaderLogo,
  LeftContainer,
  ProfileImg,
  LogoutButton,
  PopupContainer,
  Notification,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  NavLink,
  DarkModeButton,
} from './styledComponets'

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: #000000;
    opacity: 0.8;
  }
  // use your custom style for ".popup-content"
  &-content {
    background-color: #ffffff;
    opacity: 2;
  }
`

const Header = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const OnClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const bgColor = isDarkTheme ? 'black' : 'white'
      const buttonColor = isDarkTheme ? 'white' : '#3b82f6'

      return (
        <NavContainer themeColor={bgColor}>
          <NavLink to="/">
            <HeaderLogo src={websiteImageURL} alt="website logo" />
          </NavLink>

          <LeftContainer>
            <DarkModeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <HiOutlineLightBulb size="20" color="white" />
              ) : (
                <FaMoon size="20" />
              )}
            </DarkModeButton>

            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <StyledPopup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  themeColor={bgColor}
                  textColor={buttonColor}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupContainer>
                  <Notification>Are you sure, you want to logout</Notification>
                  <ButtonContainer>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={OnClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </PopupContainer>
              )}
            </StyledPopup>
          </LeftContainer>
        </NavContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(Header)
