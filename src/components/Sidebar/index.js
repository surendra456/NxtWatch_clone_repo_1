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

          const bgColor = isDarkTheme ? 'black' : '#fff'
          const linkColor = isDarkTheme ? '#fff' : 'black'

          return (
            <NavBar>
              <TabsItem>
                <Tab to="/">
                  <AiFillHome />
                  <Head>Home</Head>
                </Tab>
                <Tab to="/trending">
                  <AiOutlineFire />
                  <Head>Trending</Head>
                </Tab>
                <Tab to="/gaming">
                  <AiFillHeart />
                  <Head>Gaming</Head>
                </Tab>
                <Tab to="/savedvideos">
                  <AiOutlineBars />
                  <Head>Saved Videos</Head>
                </Tab>
              </TabsItem>
              <SideBarHeadBelow>
                <HeaderBelow>CONTACT US</HeaderBelow>
                <SocialContainer>
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="logo"
                  />
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="logo"
                  />
                  <SocialImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="logo"
                  />
                </SocialContainer>
                <BelowContent>
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
