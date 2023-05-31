import Index from './pages/Index'
import Main from './layouts/Main'

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
        <Main>
          <Index data={data} />
        </Main>
      </div>
    </>
  )
}

export default App
