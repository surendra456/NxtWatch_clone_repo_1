import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ContextData from './Context'
import LoginForm from './components/LoginContainer/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingContainer from './components/TrendingContainer'

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
      </Switch>
    )
  }
}

export default App
