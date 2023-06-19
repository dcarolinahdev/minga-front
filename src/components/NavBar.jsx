import Display from './Display'
import { useState } from 'react'

export default function NavBar () {
    let options = [
        {title: 'Home', to: '/'},
        {title: 'Mangas', to: '/'},
        {title: 'My Mangas', to: '/'},
        {title: 'Favorites', to: '/'},
        {title: 'Logout', to: '/'}
    ]
    let [show, setShow] = useState(false)
    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className='w-full absolute flex justify-between items-center p-[2.25%]'>
                {/* Hamburger menu button */}
                <div
                    className='h-6 sm:h-8 md:h-10 lg:h-10 2xl:h-12
                               w-8 sm:w-10 md:w-12 lg:w-12 2xl:w-14
                               flex justify-center items-center cursor-pointer
                               bg-indigo-700 hover:bg-indigo-600 rounded-md'>
                    <svg
                        className="w-6 md:w-8 2xl:w-10 px-[2px] fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="2" stroke="currentColor" onClick={()=>setShow(!show)}>
                        <path
                            strokeLinecap="round" strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </div>

                {/* Logo */}
                <img className='h-6 sm:h-8 md:h-10 lg:h-10 2xl:h-12' src='/assets/Logo_Blue.png' alt="Logo" />
            </nav>
        </>
    )
}