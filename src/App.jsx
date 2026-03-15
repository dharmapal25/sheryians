import React, { useEffect } from 'react'
import "./App.css"
import Home from './Components/Home'

const App = () => {
  return (
    <>

      <img src="https://ik.imagekit.io/cblndrocc/macos.jpg" className='appJsx-image' draggable="false" />

          <img src={`../src/Images/Wallpapers/${localStorage.getItem("bgImage")}`} className='appJsx-image' draggable="false" />

      <Home />
    </>
  )
}

export default App