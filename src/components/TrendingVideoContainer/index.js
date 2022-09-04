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
      const pColor = isDarkTheme ? '#cccccc' : '#181818'

      const {item} = props
      const {id, name, publishedAt, thumbnailUrl, title, viewCount} = item

      return (
        <ContainerItem to={`/videos/${id}`}>
          <ThumbnailI src={thumbnailUrl} alt="video thumbnail" />
          <ItemsContainer>
            <TrendingHead color={textColor}>{title}</TrendingHead>
            <TrendingChannel paraColor={pColor}>{name}</TrendingChannel>
            <ViwesYears>
              <Viwe paraColor={pColor}>{viewCount}</Viwe>
              <Time paraColor={pColor}>{publishedAt}</Time>
            </ViwesYears>
          </ItemsContainer>
        </ContainerItem>
      )
    }}
  </NxtContext.Consumer>
)

export default TrendingVideoContainer
