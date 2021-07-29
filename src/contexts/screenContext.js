import React, {createContext, useState, useEffect} from 'react'

const ScreenContext = createContext({
  width: 0,
  isMobile: null,
  isTablet: null,
  isDesktop: null,
  isLarge: null
})

const ScreenProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480)
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 480)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1025)

  const updateDeviceSize = () => {
    setWidth(window.innerWidth)
    setIsMobile(window.innerWidth < 480)
    setIsTablet(window.innerWidth >= 480)
    setIsDesktop(window.innerWidth >= 768)
    setIsLarge(window.innerWidth >= 1025)
  }

  useEffect(() => {
    updateDeviceSize();
    window.addEventListener('resize', updateDeviceSize)
    return window.removeEventListener('resize', updateDeviceSize)
  }, [])

  const contextValue = {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isLarge
  }

  return (
    <ScreenContext.Provider value={contextValue}>
      {props.children}
    </ScreenContext.Provider>
  )
}

export {ScreenProvider}

export default ScreenContext;