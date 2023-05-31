import Button from './Button'

export default function Hero() {
  return (
    <div className='h-screen w-full top-0 left-0 text-white bg-hero-mobile bg-cover flex justify-center items-center xl:bg-hero_desktop'>

        <div className='flex flex-col gap-2.5 text-center px-6'>
            <h1 className='text-4xl font-bold'>Your favorite comic book store</h1>
            <p>From classics to novelties, we have everything you need to
                immerse yourself in your favorite universes. Explore our catalog
                and live the adventure of your life.</p>
            <div>
                <Button />
            </div>
        </div>

    </div>
  )
}
