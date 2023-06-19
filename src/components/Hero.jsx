import Button from './Button'

export default function Hero() {
  return (
    <div className='h-full lg:h-2/3 top-0 left-0 text-white flex justify-center items-center bg-hero-mobile md:bg-hero_desktop bg-[center_top_10%] bg-cover'>

        <div className='flex flex-col gap-2.5 justify-center items-center text-center px-8'>
            <h1
              className='font-bold leading-12 lg:leading-[46.88px]
                         text-2xl md:text-3xl xl:text-4xl'>
                          Your favorite comic book store <span className='hidden lg:inline'>✨</span></h1>

            <p className='flex lg:hidden text-sm'>From classics to novelties, we have everything you need to
                immerse yourself in your favorite universes. Explore our catalog
                and live the adventure of your life.</p>
            <p className='hidden lg:flex text-lg px-[12%]'>Explore our catalog to live the adventure of your life.</p>

            <div className='w-full px-3'>
                <Button />
            </div>
        </div>

    </div>
  )
}
