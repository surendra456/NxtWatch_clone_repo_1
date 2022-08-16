import {
  ContainerItem,
  ThumbnailI,
  ItemsContainer,
  TrendingHead,
  TrendingChannel,
  ViwesYears,
  Viwe,
  Time,
} from './styledComponets'

const TrendingVideoContainer = props => {
  const {item} = props
  const {
    profileImageUrl,
    name,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = item

  return (
    <ContainerItem>
      <ThumbnailI src={thumbnailUrl} alt="" />
      <ItemsContainer>
        <TrendingHead>{title}</TrendingHead>
        <TrendingChannel>{name}</TrendingChannel>
        <ViwesYears>
          <Viwe>{viewCount}</Viwe>
          <Time>{publishedAt}</Time>
        </ViwesYears>
      </ItemsContainer>
    </ContainerItem>
  )
}

export default TrendingVideoContainer
