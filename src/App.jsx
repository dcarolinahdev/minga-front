import Index from './pages/Index'
import Main from './layouts/Main'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Main>
          <Index />
        </Main>
      </div>
    </>
  )
}

export default App
