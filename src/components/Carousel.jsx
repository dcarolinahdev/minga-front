import { useEffect, useState } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import Arrow from "./Arrow"

export default function Carousel() {

  let [categories, setCategories] = useState([])
  useEffect(
    ()=>{
      axios(apiUrl+'/categories').then(res=>{
        setCategories(res.data.response)
      }).catch(err=>console.log(err))
    },
    [] // empty array: effect is ejecuted once when component is mounted
  )

  let [counter, setCounter] = useState(0)
  let next = () => {
    setCounter((counter!==categories.length-1) ? (counter + 1) : (0))
  }
  let prev = () => {
    setCounter((counter != 0) ? (counter - 1) : (categories.length-1))
  }

  return (
    <div className='hidden md:h-1/4 md:flex justify-center m-14'>
        <div className='relative w-full py-1 px-14 text-white' style={{ backgroundColor: categories[counter]?.color }}>

            <div className="z-10 h-56 flex justify-between">
                <img className='w-1/5 h-56 self-end' src={categories[counter]?.character_photo} alt="imagen 1" />

                <img className='w-1/5 h-64 mb-4 self-end' src={categories[counter]?.cover_photo} alt="imagen 2" />

                <div className='w-6/12 flex flex-col justify-center'>
                    <h3 className='text-xl font-medium capitalize' style={{ color: categories[counter]?.hover }}>{categories[counter]?.name}</h3>
                    <p className='text-xs' style={{ color: categories[counter]?.hover }}>{categories[counter]?.description}</p>
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
