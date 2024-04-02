import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Components/Header/Index.tsx'
import Home from './Components/Pages/Home/Index.tsx'
import Login from './Components/Pages/Login/Index.tsx'
import Sobre from './Components/Pages/Sobre/Index.tsx'
import Equipe from './Components/Pages/Equipe/Index.tsx'
import Footer from './Components/Footer/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="equipe" element={<Equipe />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
