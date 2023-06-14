import { createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import Main from './layouts/Main'

let router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Index />
            }
        ]
    }
])

export default router