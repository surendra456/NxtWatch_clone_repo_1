import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import VideoCard from '../VideoCard'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtContext from '../../context/NxtContext'

import {
  BottomContainer,
  DataContainer,
  InputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VidoesContainer,
  FailureContainer,
  ImageTag,
  FailureHead,
  FailurePara,
  FailureButton,
  SearchNotConatainer,
  SearchNotImg,
  SearchNotHead,
  SearchNotPara,
  MainContainer,
  MainContainerHome,
  CloseButton,
  ModalContainer,
  AlignRow,
  Image,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.inProgress, videosList: [], search: ''}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({search: event.target.value})
  }

  onKeydownInput = event => {
    if (event.KeyCode === 13) {
      this.setState({search: event.target.value}, this.getVideos())
    }
  }

  onSearchResult = () => {
    this.getVideos()
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
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>We are having some trouble</FailurePara>
      <FailureButton type="button" onClick={this.onSearchResult}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderVideosListView = () => {
    const {videosList} = this.state
    const videoLength = videosList.length > 0

    return videoLength ? (
      <MainContainer>
        {videosList.map(eachVideo => (
          <VideoCard videos={eachVideo} key={eachVideo.id} />
        ))}
      </MainContainer>
    ) : (
      <SearchNotConatainer>
        <SearchNotImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <SearchNotHead>No Search results found</SearchNotHead>
        <SearchNotPara>
          Try different key words or remove search filter
        </SearchNotPara>
        <FailureButton type="button">Retry</FailureButton>
      </SearchNotConatainer>
    )
  }

  renderAllVideos = () => {
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
      <NxtContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'
          const SearchButtonColor = isDarkTheme ? ' #475569' : '#f9f9f9'

          return (
            <MainContainerHome>
              <Header />
              <BottomContainer backgroundColor={bgColor}>
                <Sidebar />
                <DataContainer>
                  <ModalContainer>
                    {close => (
                      <ModalContainer>
                        <AlignRow>
                          <CloseButton
                            type="button"
                            data-testid="close"
                            onClick={() => close()}
                          >
                            <IoMdClose size={20} color="#231f20" />
                          </CloseButton>
                          <Image
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                            alt="banner"
                          />
                          <Image
                            src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                        </AlignRow>
                      </ModalContainer>
                    )}
                  </ModalContainer>
                  <InputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeInput}
                      onKeyDown={this.onKeydownInput}
                      backgroundColor={bgColor}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.onSearchResult}
                      colorButton={SearchButtonColor}
                      data-testid="searchButton"
                    >
                      <BsSearch />
                    </SearchButton>
                  </InputContainer>
                  <VidoesContainer>{this.renderAllVideos()}</VidoesContainer>
                </DataContainer>
              </BottomContainer>
            </MainContainerHome>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
