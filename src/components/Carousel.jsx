import character_photo from '/assets/carousel-img1.png'
import cover_photo from '/assets/carousel-img2.png'

export default function Carousel() {
  return (
    <div className='hidden md:flex justify-center m-14'>
        <div className='flex justify-between text-white py-1 px-14 bg-gradient-to-r from-indigo-700 to-[#5E52F3]'>

            <img className='w-1/5 h-auto -mt-8 object-cover' src={character_photo} alt="imagen 1" />

            <img className='w-1/5 -mt-10 mb-8 object-top' src={cover_photo} alt="imagen 2" />

            <div className='w-6/12 flex flex-col justify-center'>
                <h3 className='text-xl font-medium'>Shonen:</h3>
                <p className='text-xs'>Is the manga that is aimed at adolescent boys. They are series with
                large amounts of action, in which humorous situations often occur.
                The camaraderie between members of a collective or a combat team stands out.</p>
            </div>

        </div>
    </div>
  )
}
