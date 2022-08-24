import NxtContext from '../../context/NxtContext'
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

const TrendingVideoContainer = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

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
    }}
  </NxtContext.Consumer>
)

export default TrendingVideoContainer
