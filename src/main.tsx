import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Index.tsx'
import Home from './Components/Home/Index.tsx'
import Login from './Components/Login/Index.tsx'
import Footer from './Components/Footer/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </React.StrictMode>,
)
