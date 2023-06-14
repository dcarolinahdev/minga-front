import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Index from './pages/Index'
import SignIn from './pages/SignIn'

let router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    }
])

export default router