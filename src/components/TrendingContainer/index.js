import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import NxtContext from '../../context/NxtContext'

import {
  BottomContainer,
  TradingContainer,
  FailureContainer,
  ImageTag,
  FailureHead,
  FailurePara,
  FailureButton,
  LoaderContainer,
  TrendingItems,
  HeadItem,
  Head,
  Icon,
  TrendingVideoContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoContainer from '../TrendingVideoContainer'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingContainer extends Component {
  state = {apiStatus: apiStatusConstants.inProgress, videoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const upadatedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        videoList: upadatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingFailureView = () => (
    <FailureContainer>
      <ImageTag
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHead>No Search results found</FailureHead>
      <FailurePara>Try Different Key Words or remove search filter</FailurePara>
      <FailureButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderVideosListView = () => {
    const {videoList} = this.state
    console.log(videoList)
    return (
      <TrendingItems>
        <HeadItem>
          <Icon>
            <AiFillFire color="red" fontSize="2em" />
          </Icon>
          <Head>Trending</Head>
        </HeadItem>
        <TrendingVideoContainer>
          {videoList.map(eachItem => (
            <VideoContainer item={eachItem} key={eachItem.id} />
          ))}
        </TrendingVideoContainer>
      </TrendingItems>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderTrendingLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <>
              <Header />
              <BottomContainer>
                <Sidebar />
                <TradingContainer>
                  {this.renderTrendingVideos()}
                </TradingContainer>
              </BottomContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default TrendingContainer
