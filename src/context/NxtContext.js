import React from 'react'

const NxtContext = React.createContext({
  videList: [],
  updatedVideoList: () => {},
})

export default NxtContext
