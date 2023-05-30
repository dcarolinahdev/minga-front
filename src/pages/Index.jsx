

export default function Index() {
  return (
    <div className='font-roboto'>

        {/* Hero section */}
        <div className='h-screen w-full top-0 left-0 text-white bg-hero-mobile bg-cover flex justify-center items-center xl:bg-hero_desktop'>

          {/* Centered elements */}
          <div className='flex flex-col gap-2.5 text-center px-6'>
            <h1 className='text-4xl font-bold'>Your favorite comic book store</h1>
            <p>From classics to novelties, we have everything you need to
              immerse yourself in your favorite universes. Explore our catalog
              and live the adventure of your life.</p>
            <div>
              <button className='text-2xl font-bold rounded-xl py-4 px-32 bg-indigo-700 hover:bg-indigo-600 md:bg-gradient-to-r from-indigo-700 to-[#5E52F3]' >
                Started
              </button>
            </div>
          </div>

        </div>

        {/* Carousel section */}
        <div className='hidden md:flex justify-center m-14'>
          <div className='flex justify-between text-white py-1 px-14 bg-gradient-to-r from-indigo-700 to-[#5E52F3]'>

            <img className='w-1/5 h-auto -mt-8 object-cover' src="assets/carousel-img1.png" alt="imagen 1" />

            <img className='w-1/5 -mt-10 mb-8 overflow-y-visible object-top' src="assets/carousel-img2.png" alt="imagen 2" />

            <div className='w-6/12 flex flex-col justify-center'>
              <h3 className='text-xl font-medium'>Shonen:</h3>
              <p className='text-xs'>Is the manga that is aimed at adolescent boys. They are series with
                large amounts of action, in which humorous situations often occur.
                The camaraderie between members of a collective or a combat team stands out.</p>
            </div>

          </div>
        </div>

    </div>
  )
}
