import {NotFoundContainer, Heading, Desc, Image} from './styledComponets'
// import Header from '../Header'
import NxtContext from '../../context/NxtContext'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? 'white' : 'black'

      const isDarkDesc = isDarkTheme ? 'white' : 'black'

      const isDarkContainer = isDarkTheme ? 'black' : 'white'

      return (
        <>
          <NotFoundContainer isDark={isDarkContainer}>
            <Image src={imageUrl} alt="not found" />
            <Heading isDark={isDarkHeading} isDarkTheme>
              Page Not Found
            </Heading>
            <Desc isDark={isDarkDesc}>
              we are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
