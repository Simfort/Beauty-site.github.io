import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import './App.css'
import HomeMain from './components/HomeMain/HomeMain'

function App() {
  return (
    <>
     <Header/>
     <HomeMain/>
    </>
  )
}

export default App
