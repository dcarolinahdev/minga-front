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
        <svg
          className="w-8 h-8 fill-current text-indigo-700"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="2" stroke="currentColor">
          <path
            stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>

        {/* Logo */}
        <img src="./src/assets/logo_manga.png" alt="Logo" />
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
