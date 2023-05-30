import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Index from './pages/Index'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <Index />
        <Footer />
      </div>
    </>
  )
}

export default App
