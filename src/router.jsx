import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Index from './pages/Index'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

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
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router