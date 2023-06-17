import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

export default function Index() {
  return (
    <div className='flex flex-col h-screen font-roboto'>
      <Hero />
      <Carousel />
    </div>
  )
}
