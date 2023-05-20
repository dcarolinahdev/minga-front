import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
    <div className='h-screen flex flex-col justify-between'>

      <nav className='w-full flex justify-between items-center top-0
                      p-2 bg-slate-300'>
        {/* Hamburger menu button */}
        <p>a</p>
        {/* Logo */}
        <p>b</p>
      </nav>
      <div className='w-full h-full bg-sky-200'>
        main
      </div>
      <footer className='w-full hidden md:flex p-2 bg-slate-300'>footer</footer>

    </div>
    </>
  )
}

export default App
