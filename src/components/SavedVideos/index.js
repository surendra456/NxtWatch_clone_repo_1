import Header from '../Header'
import VideoCard from '../VideoCard'
import NxtContext from '../../context/NxtContext'

import {
  Image,
  NotFoundContainer,
  Heading,
  MainContainer,
  NavbarLargeContainer,
  Desc,
} from './styledComponents'

import Sidebar from '../Sidebar'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {videoList, isDarkTheme} = value
      const showEmptyView = videoList.length === 0
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      return (
        <>
          <Header />
          <MainContainer data-testid="savedVideos" bgColor={bgColor}>
            <NavbarLargeContainer>
              <Sidebar />
              {showEmptyView ? (
                <NotFoundContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <Heading className="cart-empty-heading">
                    No saved videos found
                  </Heading>
                  <Desc>You can save your videos while watching them.</Desc>
                </NotFoundContainer>
              ) : (
                <MainContainer>
                  <Heading textColor={textColor}>My Saved Videos</Heading>

                  <VideoCard />
                </MainContainer>
              )}
            </NavbarLargeContainer>
          </MainContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)
export default SavedVideos
