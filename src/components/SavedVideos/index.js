import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import VideoListView from '../VideoListView'
import NxtContext from '../../context/NxtContext'

import {
  Image,
  NotFoundContainer,
  Heading,
  MainContainer,
  NavbarLargeContainer,
  Desc,
  HeadItem,
} from './styledComponents'

import Sidebar from '../Sidebar'

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {videoList, isDarkTheme} = value
      const showEmptyView = videoList.length === 0
      const bgColorTop = isDarkTheme ? '#181818' : '#ffffff'
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      return (
        <>
          <Header />
          <MainContainer data-testid="savedVideos" bgColor={bgColor}>
            <NavbarLargeContainer>
              <Sidebar />
              {showEmptyView ? (
                <NotFoundContainer bgColor={bgColor}>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <Heading color={textColor}>No saved videos found</Heading>
                  <Desc color={textColor}>
                    You can save your videos while watching them.
                  </Desc>
                </NotFoundContainer>
              ) : (
                <MainContainer>
                  <HeadItem back={bgColorTop}>
                    <AiFillFire color="red" fontSize="2em" />
                    <Heading color={textColor}>Saved Videos</Heading>
                  </HeadItem>
                  <VideoListView />
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
