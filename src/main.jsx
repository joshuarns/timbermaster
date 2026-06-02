import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Collections from './pages/Collections.jsx'
import ProductLVT from './pages/ProductLVT.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/lvt" element={<ProductLVT />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
