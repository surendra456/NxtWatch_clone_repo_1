import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {
  NavContainer,
  HeaderLogo,
  LeftContainer,
  ProfileImg,
  LogoutButton,
} from './styledComponets'

const Header = () => (
  <NavContainer>
    <HeaderLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt=""
    />
    <LeftContainer>
      <FaMoon stroke-width="21" />
      <ProfileImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <LogoutButton>Logout</LogoutButton>
    </LeftContainer>
  </NavContainer>
)

export default withRouter(Header)
