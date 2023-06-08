import { useState } from "react"
import Arrow from "./Arrow"

export default function Carousel( {character_photo, cover_photo, name, description} ) {

  let [counter, setCounter] = useState(0)
  let next = () => {
    //setCounter((counter!==data.length-1) ? (counter + 1) : (0))
    setCounter(counter + 1)
  }
  let prev = () => {
    //setCounter((counter != 0) ? (counter - 1) : (data.length-1))
    setCounter(counter - 1)
  }

  return (
    <div className='hidden md:flex justify-center m-14'>
        <div className='relative py-1 px-14 text-white bg-gradient-to-r from-indigo-700 to-[#5E52F3]'>

            <div className="z-10 flex justify-between">
                <img className='w-1/5 h-auto -mt-8 object-cover' src={character_photo} alt="imagen 1" />

                <img className='w-1/5 -mt-10 mb-8 object-top' src={cover_photo} alt="imagen 2" />

                <div className='w-6/12 flex flex-col justify-center'>
                    <h3 className='text-xl font-medium'>{name}</h3>
                    <p className='text-xs'>{counter}</p>
                </div>
            </div>

            <div className="z-20 absolute top-[47.5%] left-[3%] right-[3%] flex justify-between">

              <Arrow d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"} onClick={prev}/>

              <Arrow d={"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}  onClick={next}/>

            </div>
        </div>
    </div>
  )
}
