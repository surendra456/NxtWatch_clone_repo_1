import {Component} from 'react'
import {
  AiFillHome,
  AiOutlineFire,
  AiFillHeart,
  AiOutlineBars,
} from 'react-icons/ai'
import NxtContext from '../../context/NxtContext'

import {
  NavBar,
  TabsItem,
  Tab,
  Head,
  SideBarHeadBelow,
  HeaderBelow,
  SocialContainer,
  SocialImage,
  BelowContent,
} from './styledCoponents'

class Sidebar extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? 'black' : '#ffffff'
          const linkColor = isDarkTheme ? '#ffffff' : 'black'

          return (
            <NavBar backgroundColor={bgColor}>
              <TabsItem>
                <Tab to="/">
                  <AiFillHome />
                  <Head textColor={linkColor}>Home</Head>
                </Tab>
                <Tab to="/trending">
                  <AiOutlineFire />
                  <Head textColor={linkColor}>Trending</Head>
                </Tab>
                <Tab to="/gaming">
                  <AiFillHeart />
                  <Head textColor={linkColor}>Gaming</Head>
                </Tab>
                <Tab to="/savedvideos">
                  <AiOutlineBars />
                  <Head textColor={linkColor}>Saved Videos</Head>
                </Tab>
              </TabsItem>
              <SideBarHeadBelow>
                <HeaderBelow textColor={linkColor}>CONTACT US</HeaderBelow>
                <SocialContainer>
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="facebook logo"
                  />
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialContainer>
                <BelowContent textColor={linkColor}>
                  Enjoy! Now to See your <br />
                  Channels and <br />
                  recommendations!
                </BelowContent>
              </SideBarHeadBelow>
            </NavBar>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Sidebar
