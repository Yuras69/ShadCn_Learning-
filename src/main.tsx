import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Product from './pages/product.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

