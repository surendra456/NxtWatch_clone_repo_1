import {
  VideoContainer,
  ThumbnailImg,
  ContentContainer,
  ProfileImg,
  VideoData,
  Title,
  TimeContent,
  View,
  Time,
  Data,
  TitleName,
  VideoLink,
} from './StyledComponents'

import NxtContext from '../../context/NxtContext'

const VideoCard = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videos} = props
      const fontColor = isDarkTheme ? '#ffffff' : '#000000'

      const {
        id,
        name,
        profileImageUrl,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videos

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoContainer>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <ContentContainer>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <Data>
                <VideoData>
                  <Title color={fontColor}>{title}</Title>
                  <TitleName>{name}</TitleName>
                </VideoData>
                <TimeContent>
                  <View>{viewCount} Views</View>
                  <Time>{publishedAt}</Time>
                </TimeContent>
              </Data>
            </ContentContainer>
          </VideoContainer>
        </VideoLink>
      )
    }}
  </NxtContext.Consumer>
)

export default VideoCard
