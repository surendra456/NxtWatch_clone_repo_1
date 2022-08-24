import NxtContext from '../../context/NxtContext'

import {
  ItemContainer,
  ImageContainer,
  Title,
  CountViews,
} from './styledComponents'

const GamingItem = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      const {item} = props
      const {id, title, thumbnailUrl, viewCount} = item

      return (
        <ItemContainer>
          <ImageContainer src={thumbnailUrl} alt="" />
          <Title>{title}</Title>
          <CountViews>{viewCount} Watching Worldwide</CountViews>
        </ItemContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default GamingItem
