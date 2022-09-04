import {Component} from 'react'
import ReactPlayer from 'react-player'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineMenuFold,
} from 'react-icons/ai'

import NxtContext from '../../context/NxtContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  BottomContainer,
  VideoPlayContainer,
  LoaderContainer,
  FailureContainer,
  ImageTag,
  FailureHead,
  FailurePara,
  FailureButton,
  VideoContainer,
  Head,
  ItemsContainer,
  Content,
  Count,
  Time,
  ContentItem,
  IntractionItem,
  IntraName,
  Line,
  LogoAndComment,
  Logo,
  NameAndCount,
  Name,
  CountSubcribers,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPlayer extends Component {
  state = {
    videoLink: [],
    apiStatus: apiStatusConstants.initial,
    likeActive: false,
    dislikeActive: false,
    savedActive: false,
  }

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoLink: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  activeLiked = () => {
    this.setState(prevState => ({
      likeActive: !prevState.likeActive,
      dislikeActive: false,
    }))
  }

  activeDisLiked = () => {
    this.setState(prevState => ({
      dislikeActive: !prevState.dislikeActive,
      likeActive: false,
    }))
  }

  activeSaved = () => {
    this.setState(prevState => ({
      savedActive: !prevState.savedActive,
      dislikeActive: false,
      likeActive: false,
    }))
  }

  renderVideosListView = () => (
    <NxtContext.Consumer>
      {value => {
        const {videoLink, likeActive, dislikeActive, savedActive} = this.state
        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          name,
          profileImageUrl,
          subscriberCount,
        } = videoLink

        const {addVideoItem, isDarkTheme} = value

        const onAddToCart = () => {
          addVideoItem({...videoLink})
        }

        const likeColor = likeActive ? '#2563eb' : '#64748b'
        const dislikeColor = dislikeActive ? '#2563eb' : '#64748b'
        const savedColor = savedActive ? '#2563eb' : '#64748b'
        const savedText = savedActive ? 'Saved' : 'Save'

        const bgColor = isDarkTheme ? '#181818' : ' #f9f9f9'

        return (
          <VideoContainer backColor={bgColor}>
            <ReactPlayer url={videoUrl} controls width="720px" height="420px" />
            <Head>{title}</Head>
            <ItemsContainer>
              <Content>
                <Count>{viewCount} Views</Count>
                <Time>{publishedAt}</Time>
              </Content>
              <ContentItem>
                <IntractionItem type="button">
                  <AiOutlineLike
                    size="25"
                    onClick={this.activeLiked}
                    color={likeColor}
                  />
                  <IntraName color={likeColor}>Like</IntraName>
                </IntractionItem>
                <IntractionItem>
                  <AiOutlineDislike
                    size="25"
                    onClick={this.activeDisLiked}
                    color={dislikeColor}
                  />
                  <IntraName color={dislikeColor}>Dislike</IntraName>
                </IntractionItem>
                <IntractionItem type="button" onClick={onAddToCart}>
                  <AiOutlineMenuFold
                    size="25"
                    onClick={this.activeSaved}
                    color={savedColor}
                  />
                  <IntraName color={savedColor}>{savedText}</IntraName>
                </IntractionItem>
              </ContentItem>
            </ItemsContainer>
            <Line />
            <LogoAndComment>
              <Logo src={profileImageUrl} alt="" />
              <NameAndCount>
                <Name>{name}</Name>
                <CountSubcribers>{subscriberCount} subscribers</CountSubcribers>
              </NameAndCount>
            </LogoAndComment>
            <Description>{description}</Description>
          </VideoContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <ImageTag
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderVideoItem = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <BottomContainer>
          <Sidebar />
          <VideoPlayContainer>{this.renderVideoItem()}</VideoPlayContainer>
        </BottomContainer>
      </>
    )
  }
}

export default VideoPlayer
