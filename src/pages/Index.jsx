import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

export default function Index({data}) {
  return (
    <div className='font-roboto'>
      <Hero />
      <Carousel name={data[0].name} description={data[0].description} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} />
    </div>
  )
}
