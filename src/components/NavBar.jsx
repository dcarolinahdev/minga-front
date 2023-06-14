import logo_manga from '/assets/logo_manga.png'
import Display from './Display'
import { useState } from 'react'

export default function NavBar () {
    let options = [
        {title: 'Home', to: '/'},
        {title: 'Mangas', to: '/mangas'},
        {title: 'My Mangas', to: '/'},
        {title: 'Favorites', to: '/'},
        {title: 'Logout', to: '/'}
    ]
    let [show, setShow] = useState(false)
    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className='w-full absolute flex justify-between items-center p-2'>
                {/* Hamburger menu button */}
                <svg
                    className="w-8 h-8 fill-current text-indigo-700 md:text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" onClick={()=>setShow(!show)}>
                    <path
                        strokeLinecap="round" strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

                {/* Logo */}
                <img className='z-10' src={logo_manga} alt="Logo" />
            </nav>
        </>
    )
}