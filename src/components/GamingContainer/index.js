import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItem from '../GamingItem'
import NxtContext from '../../context/NxtContext'
import {
  BottomContainer,
  LoaderContainer,
  FailureContainer,
  ImageTag,
  FailureHead,
  FailurePara,
  FailureButton,
  GamingContainerR,
  Head,
  HeadContainer,
  ItemsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingContainer extends Component {
  state = {videoList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingFailureView = () => (
    <FailureContainer>
      <ImageTag
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>We are having some trouble</FailurePara>
      <FailureButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderGamingVideosListView = props => {
    const {videoList} = this.state
    const BgColor = props ? '#181818' : '#ffffff'
    const fontColor = props ? '#ffffff' : '#000000'

    return (
      <GamingContainerR>
        <HeadContainer back={BgColor}>
          <SiYoutubegaming color="red" fontSize="2em" />
          <Head color={fontColor}>Gaming</Head>
        </HeadContainer>
        <ItemsContainer>
          {videoList.map(each => (
            <GamingItem item={each} key={each.id} />
          ))}
        </ItemsContainer>
      </GamingContainerR>
    )
  }

  renderGamingVideos = props => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosListView(props)
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderGamingLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'

          return (
            <>
              <Header />
              <BottomContainer backgroundColor={bgColor}>
                <Sidebar />
                {this.renderGamingVideos(isDarkTheme)}
              </BottomContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default GamingContainer
