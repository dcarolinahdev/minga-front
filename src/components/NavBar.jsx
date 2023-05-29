export default function NavBar () {
    return (
        <nav className='w-full absolute flex justify-between items-center p-2'>
            {/* Hamburger menu button */}
            <svg
                className="w-8 h-8 fill-current text-indigo-700 md:text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>

            {/* Logo */}
            <img src="./src/assets/logo_manga.png" alt="Logo" />
        </nav>
    )
}