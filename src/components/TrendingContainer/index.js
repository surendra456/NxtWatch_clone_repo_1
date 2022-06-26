import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {Had} from './styled'

class TrendingContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Had>nani</Had>
      </>
    )
  }
}

export default TrendingContainer
