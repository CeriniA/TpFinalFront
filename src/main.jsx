import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
