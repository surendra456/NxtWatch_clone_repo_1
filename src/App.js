import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NxtContext from './context/NxtContext'
import LoginForm from './components/LoginContainer/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingContainer from './components/TrendingContainer'
import GamingContainer from './components/GamingContainer'
import SavedVideos from './components/SavedVideos'
import VideoPlayer from './components/VideoPalyer'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {videoList: [], isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideoItem = product => {
    const {videoList} = this.state

    const productObject = videoList.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        videoList: prevState.videoList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            return {...eachCartItem}
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...videoList, product]
      this.setState({videoList: updatedCartList})
    }
  }

  render() {
    const {videoList, isDarkTheme} = this.state

    return (
      <NxtContext.Provider
        value={{
          videoList,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addVideoItem: this.addVideoItem,
          removeVideoItem: this.removeVideoItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/trending"
            component={TrendingContainer}
          />
          <ProtectedRoute exact path="/gaming" component={GamingContainer} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
