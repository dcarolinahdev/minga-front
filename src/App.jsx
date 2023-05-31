import NavBar from './components/NavBar'
import Footer from './components/Footer'
/*import Index from './pages/Index'*/
import Hero from './components/Hero'
import Carousel from './components/Carousel'

import character_photo from '/assets/carousel-img1.png'
import cover_photo from '/assets/carousel-img2.png'

function App() {
  let data = [
    {
      name: '',
      character_photo: '',
      cover_photo: '',
      description: ''
    },
  ]
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />

        <div className='font-roboto'>
          <Hero />
          <Carousel />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
