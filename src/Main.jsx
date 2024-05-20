import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Card from './Card'
import HeaderCard from './HeaderCard'
import Footer from './Footer'
import Container from './Container'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeaderCard />
    <Container />
    <Footer />
  </React.StrictMode>,
)


export default main;