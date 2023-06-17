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
    <div className='hidden relative md:h-[25vh] md:flex justify-center mx-[5%] my-[4%]'>
        <div className='w-full py-1 px-14 text-white' style={{ backgroundColor: categories[counter]?.color }}>
            <div className="z-10 h-full flex justify-around">
                  <div className="w-1/5 h-full flex justify-center">
                      <img className="h-full self-end" src={categories[counter]?.character_photo} alt="character photo" />
                  </div>

                  <div className="w-1/5 h-full -mt-[2%] flex justify-center">
                      <img className="h-full self-end" src={categories[counter]?.cover_photo} alt="cover photo" />
                  </div>

                  <div className='w-6/12 flex flex-col justify-center'>
                      <h3 className='text-xl font-medium capitalize' style={{ color: categories[counter]?.hover }}>{categories[counter]?.name}</h3>
                      <p className='text-xs' style={{ color: categories[counter]?.hover }}>{categories[counter]?.description}</p>
                  </div>
            </div>
        </div>
        <div className="z-20 absolute top-[45%] left-[3%] right-[3%] flex justify-between">

          <Arrow d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"} onClick={prev}/>

          <Arrow d={"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}  onClick={next}/>

        </div>
    </div>
  )
}
