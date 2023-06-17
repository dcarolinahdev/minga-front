import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Index from './pages/Index'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import CiaForm from './pages/CiaForm'

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
            },
            {
                path: '/cia-form',
                element: <CiaForm />
            }
        ]
    }
])

export default router