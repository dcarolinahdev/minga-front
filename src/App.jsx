import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
    <div className='h-screen flex flex-col'>

      {/* Navbar section */}
      <nav className='w-full flex justify-between items-center top-0
                      p-2'>
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

      {/* Main section */}
      <div className='font-roboto'>

        {/* Hero section with background-image and text-white */}
        <div className=''>

          {/* Centered elements */}
          <div className='flex flex-col gap-2.5 text-center p-2'>
            <h1 className='text-4xl font-bold'>Your favorite comic book store</h1>
            <p>From classics to novelties, we have everything you need to
              immerse yourself in your favorite universes. Explore our catalog
              and live the adventure of your life.</p>
            <button className='text-2xl font-bold rounded-full py-4 px-12 bg-indigo-700 hover:bg-indigo-600' >
            Started
            </button>
          </div>

        </div>

        {/*
        Carousel section
        <div className='hidden md:flex'>Carousel</div>
        */}

      </div>

      {/*
      Footer section
      <footer className='w-full hidden md:flex p-2'>footer</footer>
      */}

    </div>
    </>
  )
}

export default App
