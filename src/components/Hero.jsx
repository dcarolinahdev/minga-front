export default function Hero() {
  return (
    <div className='h-screen w-full top-0 left-0 text-white bg-hero-mobile bg-cover flex justify-center items-center xl:bg-hero_desktop'>

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
  )
}
