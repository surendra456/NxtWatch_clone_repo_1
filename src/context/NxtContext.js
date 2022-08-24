import React from 'react'

const NxtContext = React.createContext({
  videList: [],
  isDarkTheme: false,
  toggleTheme: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {},
})

export default NxtContext
