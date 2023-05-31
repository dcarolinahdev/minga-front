export default function Carousel( {character_photo, cover_photo, name, description} ) {
  return (
    <div className='hidden md:flex justify-center m-14'>
        <div className='flex justify-between text-white py-1 px-14 bg-gradient-to-r from-indigo-700 to-[#5E52F3]'>

            <img className='w-1/5 h-auto -mt-8 object-cover' src={character_photo} alt="imagen 1" />

            <img className='w-1/5 -mt-10 mb-8 object-top' src={cover_photo} alt="imagen 2" />

            <div className='w-6/12 flex flex-col justify-center'>
                <h3 className='text-xl font-medium'>{name}</h3>
                <p className='text-xs'>{description}</p>
            </div>

        </div>
    </div>
  )
}
