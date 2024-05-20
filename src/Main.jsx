import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Card from './Card'
import HeaderCard from './HeaderCard'
import Footer from './Footer'
import Container from './Container'
import './index.css'

const brandOne = "Start Bootstrap";
const brandTwo = "Start Tailwind";
const brandThree = "Start CSS";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar brand= {brandOne} />
    <HeaderCard />
    <Container />
    <Footer />
  </React.StrictMode>,
)



export default main;

