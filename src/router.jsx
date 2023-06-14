import { createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'

let router = createBrowserRouter([
    {
        path:'/',
        element: <Index />
    }
])

export default router