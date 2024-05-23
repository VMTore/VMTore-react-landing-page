import React from "react";
import NavBar from "./components/NavBar";
import Card from './components/Card'
import HeaderCard from './components/HeaderCard'
import Footer from './components/Footer'
import CardsContainer from './components/CardsContainer'
import './index.css'

const Page = () => {
    const brandOne = "Start Bootstrap";
    const brandTwo = "Start Tailwind";
    const brandThree = "Start CSS";

    return (
        <div>
            <NavBar brand= {brandOne} />
            <HeaderCard />
            <CardsContainer />
            <Footer />
        </div>
    )
}

export default Page;