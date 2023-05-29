import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
