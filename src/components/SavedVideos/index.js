import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoContainer from '../TrendingVideoContainer'

import {
  BottomContainer,
  NoSaved,
  Img,
  NoSavedHead,
  NoSavedDec,
  SavedItems,
  HeadItem,
  Icon,
  Head,
  TrendingVideoContainer,
} from './styledComponents'

class SavedVideos extends Component {
  state = {
    videosList: [
      {
        id: 'ad9822d2-5763-41d9-adaf-baf9da3fd490',
        name: 'iB Hubs',
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
        publishedAt: 'Nov 29, 2016',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png',
        title: 'iB Hubs Announcement Event',
        viewCount: '26K',
      },
    ],
  }

  renderNoSearchResult = () => (
    <NoSaved>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHead>No Saved Videos Found</NoSavedHead>
      <NoSavedDec>You Can Save Videos While Watching Them</NoSavedDec>
    </NoSaved>
  )

  renderSavedVideos = () => {
    const {videosList} = this.state

    return (
      <SavedItems>
        <HeadItem>
          <Icon>
            <AiFillFire color="red" fontSize="2em" />
          </Icon>
          <Head>Saved Videos</Head>
        </HeadItem>
        <TrendingVideoContainer>
          {videosList.map(eachItem => (
            <VideoContainer item={eachItem} key={eachItem.id} />
          ))}
        </TrendingVideoContainer>
      </SavedItems>
    )
  }

  render() {
    const {videosList} = this.state
    const videoLength = videosList.length === 0

    return (
      <>
        <Header />
        <BottomContainer>
          <Sidebar />
          {videoLength ? this.renderNoSearchResult() : this.renderSavedVideos()}
        </BottomContainer>
      </>
    )
  }
}

export default SavedVideos
