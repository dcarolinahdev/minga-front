import NavBar from './components/NavBar'
import Footer from './components/Footer'
/*import Index from './pages/Index'*/
import Hero from './components/Hero'
import Carousel from './components/Carousel'

function App() {
  let data = [
    {
      name: 'Shonen',
      character_photo: '/assets/carousel-img1.png',
      cover_photo: '/assets/carousel-img2.png',
      description: 'Is the manga that is aimed at adolescent boys. They are series with '+
                   'large amounts of action, in which humorous situations often occur. '+
                   'The camaraderie between members of a collective or a combat team stands out.'
    },
  ]
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />

        <div className='font-roboto'>
          <Hero />
          <Carousel name={data[0].name} description={data[0].description} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
