import React from 'react'

const ContextData = React.createContext({
  isDark: false,
  isChangedTheme: () => {},
})

export default ContextData
