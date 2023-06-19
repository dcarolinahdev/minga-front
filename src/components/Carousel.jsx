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
    <div className="hidden lg:h-1/3 lg:block" >
        <div className='relative h-full flex justify-center items-center px-[5%] py-[3.5%]'>
            <div className='h-full w-full text-white' style={{ backgroundColor: categories[counter]?.hover }}>
                <div className="h-full flex justify-evenly">
                      <div className="w-1/5 h-full flex justify-center pl-[2%]">
                          <img className="h-full self-end" src={categories[counter]?.character_photo} alt="character photo" />
                      </div>

                      <div className="w-1/5 h-full -mt-[2%] flex justify-center">
                          <img className="h-full self-end" src={categories[counter]?.cover_photo} alt="cover photo" />
                      </div>

                      <div className='w-6/12 flex flex-col justify-center pl-[4%] pr-[10%]'>
                          <h3 className='text-xl font-medium capitalize' style={{ color: categories[counter]?.color }}>{categories[counter]?.name}</h3>
                          <p className='text-xs' style={{ color: categories[counter]?.color }}>{categories[counter]?.description}</p>
                      </div>
                </div>
            </div>
            <div className="absolute top-[45%] left-[6.5%] right-[6.5%] flex justify-between">

              <Arrow d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"} onClick={prev}/>

              <Arrow d={"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}  onClick={next}/>

            </div>
        </div>
    </div>
  )
}
