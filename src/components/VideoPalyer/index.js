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
  ContSub,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPlayer extends Component {
  state = {videoLink: [], apiStatus: apiStatusConstants.success}

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
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

  renderVideosListView = () => {
    const {videoLink} = this.state
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

    return (
      <VideoContainer>
        <ReactPlayer url={videoUrl} controls width="720px" height="420px" />
        <Head>{title}</Head>
        <ItemsContainer>
          <Content>
            <Count>{viewCount} Views</Count>
            <Time>{publishedAt}</Time>
          </Content>
          <ContentItem>
            <IntractionItem>
              <AiOutlineLike />
              <IntraName>Like</IntraName>
            </IntractionItem>
            <IntractionItem>
              <AiOutlineDislike />
              <IntraName>Dislike</IntraName>
            </IntractionItem>
            <IntractionItem>
              <AiOutlineMenuFold />
              <IntraName>Save</IntraName>
            </IntractionItem>
          </ContentItem>
        </ItemsContainer>
        <Line />
        <LogoAndComment>
          <Logo src={profileImageUrl} alt="" />
          <NameAndCount>
            <Name>{name}</Name>
            <ContSub>{subscriberCount} subscribers</ContSub>
          </NameAndCount>
        </LogoAndComment>
        <Description>{description}</Description>
      </VideoContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <ImageTag
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We Are Having some Trouble to complete your request. Please try again
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
