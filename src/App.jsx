import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  let name ='Diana Carolina'
  let persona = {
    nombre: name,
    edad: 31,
    hijos: 1
  }

  return (
    <>
      <nav className='flex justify-between flex-wrap py-1 lg:py3 px-4 bg-teal-500 font-pop mb-3'>
        <div className='flex items-center flex-shrink-0 text-white px-0 lg:px-3 py-0 lg:py-2 border border-transparent'>
          <span>Logo</span>
        </div>
        <div className='block lg:hidden'>
          <button id="square" className='flex px-3 py-2 border rounded text-teal-200'>
            B
          </button>
        </div>
        <div id="menu" className='w-full lg:w-auto hidden lg:flex lg:items-center'>
          <div className='text-sm lg:flex-grow'>
            <a href="#buttons"
              className='block lg:inline-block text-teal-200 hover:text-white mr-4'>
              Buttons</a>
            <a href="#grids"
              className='block lg:inline-block text-teal-200 hover:text-white mr-4'>
              Grids</a>
            <a href="#fonts"
              className='block lg:inline-block text-teal-200 hover:text-white mr-4'>
              Fonts</a>
          </div>
        </div>
      </nav>

      <div id="buttons" className='flex flex-col items-center justify-center'>

        <div className='flex bg-gray-400 p-5 rounded-lg'>
          <a className='bg-purple-300 hover:bg-purple-400 p-16 rounded-l-3xl' href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a className='bg-green-200 hover:bg-green-300 p-16 rounded-r-3xl' href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className='my-5 text-violet-900'>Page with <b>Vite + React</b></h1>

        <h2 className='font-bold my-5' >--- Testing buttons ---</h2>

        <div className="flex flex-col items-center gap-4">

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded' >
            primary button
          </button>

          <button className='bg-gradient-to-r from-indigo-700 to-indigo-400 p-3' onClick={() => setCount((count) => count + 1)}>
            {name} have made <b className='text-sky-200'>{count} clicks</b>
          </button>

        </div>

      </div>

      <div className='container mx-auto mt-5 text-center'>
        <h2 className='font-bold my-5' >--- Testing grids cols ---</h2>

        <div className='grid grid-cols-3 gap-2 my-3'>
          <div className='bg-red-400'>A</div>
          <div className='bg-red-400'>A</div>
          <div className='bg-red-400'>A</div>
          <div className='bg-red-400'>A</div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-3'>
          <div className='bg-blue-400'>A</div>
          <div className='bg-blue-400'>A</div>
          <div className='bg-blue-400'>A</div>
          <div className='bg-blue-400'>A</div>
        </div>

        <div className='grid grid-cols-4 gap-2 my-3'>
          <div className='bg-orange-400 col-span-2'>B</div>
          <div className='bg-orange-400'>A</div>
          <div className='bg-orange-400'>A</div>
          <div className='bg-orange-400 col-span-4'>C</div>
        </div>

        <div className='grid grid-cols-12 gap-2 my-3'>
          <div className='bg-green-400 col-span-6'>6</div>
          <div className='bg-green-400 col-span-7'>7</div>
          <div className='bg-green-400 col-span-8'>8</div>
          <div className='bg-green-400 col-span-9'>9</div>
          <div className='bg-green-400 col-span-10'>10</div>
          <div className='bg-green-400 col-span-11'>11</div>
          <div className='bg-green-400 col-span-12'>12</div>
        </div>

        <div className='grid grid-cols-4 gap-2 my-3'>
          <div className='bg-pink-400 col-span-2'>B</div>
          <div className='bg-pink-400'>A</div>
          <div className='bg-pink-400 col-span-3 col-start-2'>C</div>
          <div className='bg-pink-400'>A</div>
        </div>

      </div>

      <div id="grids" className='container mx-auto mt-5 text-center'>
        <h2 className='font-bold my-5' >--- Testing grids cols and rows ---</h2>

        <div className='grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-2 my-3'>
          <div className='bg-gray-400'>A</div>
          <div className='bg-gray-400'>A</div>
          <div className='bg-gray-400 col-span-1 md:col-span-2 row-span-1 md:row-span-2'>B</div>
          <div className='bg-gray-400'>A</div>
          <div className='bg-gray-400'>A</div>
        </div>

      </div>

      <div id="fonts" className='text-center'>
      <h2 className='font-bold my-5' >--- Testing new fonts and colors ---</h2>
        <p className='bg-blue-main text-yellow-main mb-3'>Diana Carolina</p>
        <p className='bg-gray-600 text-white font-manga mb-3'>Diana Carolina</p>
        <p className='bg-green-200 text-green-600 font-pop'>Diana Carolina</p>
      </div>

      <div className='container mx-auto mt-5 text-center'>
      <h2 className='font-bold my-5' >--- Testing flex ---</h2>
        <div className='flex flex-wrap bg-gray-300' >
          <div className="bg-orange-500 p-2 m-2">0</div>
          <div className="bg-orange-500 p-2 m-2">1</div>
          <div className="bg-orange-500 p-2 m-2">2</div>
          <div className="bg-orange-500 p-2 m-2">3</div>
          <div className="bg-orange-500 p-2 m-2">4</div>
          <div className="bg-orange-500 p-2 m-2">5</div>
          <div className="bg-orange-500 p-2 m-2">6</div>
          <div className="bg-orange-500 p-2 m-2">7</div>
          <div className="bg-orange-500 p-2 m-2">8</div>
          <div className="bg-orange-500 p-2 m-2">9</div>
          <div className="bg-orange-500 p-2 m-2">0</div>
          <div className="bg-orange-500 p-2 m-2">1</div>
          <div className="bg-orange-500 p-2 m-2">2</div>
          <div className="bg-orange-500 p-2 m-2">3</div>
          <div className="bg-orange-500 p-2 m-2">4</div>
          <div className="bg-orange-500 p-2 m-2">5</div>
        </div>

        <div className='flex flex-wrap bg-gray-300' >
          <div className="bg-cyan-500 p-2 m-2">x</div>
          <div className="bg-cyan-500 p-2 m-2">y</div>
          <div className="bg-cyan-500 p-2 m-2 flex-1">{persona.nombre}</div>
          <div className="bg-cyan-500 p-2 m-2">y</div>
          <div className="bg-cyan-500 p-2 m-2">x</div>
        </div>
      </div>

      <div className='bg-green-200 my-8 p-6'>
        <div className='bg-footer_db h-72 flex items-center justify-center'>
          <div className='text-white font-bold'>Test Background</div>
        </div>
      </div>
    </>
  )
}

export default App
