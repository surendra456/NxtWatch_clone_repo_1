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

const VideoCard = props => {
  const {videos} = props
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
        <ThumbnailImg src={thumbnailUrl} alt="" />
        <ContentContainer>
          <ProfileImg src={profileImageUrl} alt="" />
          <Data>
            <VideoData>
              <Title>{title}</Title>
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
}

export default VideoCard
