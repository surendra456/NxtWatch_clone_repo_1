import TrendingVideoContainer from '../TrendingVideoContainer'
import NxtContext from '../../context/NxtContext'
import {NavLinksList} from './styledComponents'

const VideoListView = () => (
  <NxtContext.Consumer>
    {value => {
      const {videoList, isDarkTheme} = value
      const backgroundColor = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <NavLinksList color={backgroundColor}>
          {videoList.map(eachCartItem => (
            <TrendingVideoContainer key={eachCartItem.id} item={eachCartItem} />
          ))}
        </NavLinksList>
      )
    }}
  </NxtContext.Consumer>
)

export default VideoListView
