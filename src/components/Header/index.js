import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
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

      return (
        <NavContainer>
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt=""
          />
          <LeftContainer>
            <FaMoon />
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <StyledPopup
              modal
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {close => (
                <PopupContainer>
                  <Notification>Are you sure you want to logout?</Notification>
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
