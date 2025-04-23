import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Solar from './pages/Solar.tsx'
import Wind from './pages/Wind.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/solar' element={<Solar />}/>
      <Route path='/wind' element={<Wind />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
