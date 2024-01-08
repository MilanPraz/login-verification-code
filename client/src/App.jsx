import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Password from './components/Password'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import Register from './components/Register'
import Profile from './components/Profile'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/password",
    element:<Password/>
  },
  {
    path:"/recovery",
    element:<Recovery/>
  },
  {
    path:"/reset",
    element:<Reset/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {path:"/profile",
  element:<Profile/>
}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
