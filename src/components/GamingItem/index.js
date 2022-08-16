import {
  ItemContainer,
  ImageContainer,
  Title,
  CountViews,
} from './styledComponents'

const GamingItem = props => {
  const {item} = props
  const {id, title, thumbnailUrl, viewCount} = item

  return (
    <ItemContainer>
      <ImageContainer src={thumbnailUrl} alt="" />
      <Title>{title}</Title>
      <CountViews>{viewCount} Watching Worldwide</CountViews>
    </ItemContainer>
  )
}

export default GamingItem
