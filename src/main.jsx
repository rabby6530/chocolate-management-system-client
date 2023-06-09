import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import AddChocolate from './components/page/Home/AddChocolate.jsx'
import Home from './components/page/Home/Home.jsx'
import EiditChocolate from './components/page/Home/EiditChocolate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addChocolate')

      },
      {
        path: 'addChocolate',
        element: <AddChocolate></AddChocolate>

      },
      {
        path: 'edit/:id',
        element: <EiditChocolate></EiditChocolate>,
        loader: ({ params }) => fetch(`http://localhost:5000/addChocolate/${params.id}`)

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>,
)
