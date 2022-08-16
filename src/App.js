import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtContext from './context/NxtContext'
import LoginForm from './components/LoginContainer/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingContainer from './components/TrendingContainer'
import GamingContainer from './components/GamingContainer'
import SavedVideos from './components/SavedVideos'
import VideoPlayer from './components/VideoPalyer'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  render() {
    const {isDark} = this.state
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={TrendingContainer} />
        <ProtectedRoute exact path="/gaming" component={GamingContainer} />
        <ProtectedRoute exact path="/savedVideos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
      </Switch>
    )
  }
}

export default App
