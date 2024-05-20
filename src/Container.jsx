import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";


const Container = () => {
    
    const ImageOne = "https://content.nationalgeographic.com.es/medio/2022/07/28/roots-of-lyngen_03dbacb8_800x800.jpg";
    const ImageTwo = "https://content.nationalgeographic.com.es/medio/2021/10/02/ghost_4b27d58d_800x800.jpg";
    const ImageThree = "https://content.nationalgeographic.com.es/medio/2024/01/18/parque-nacional-de-las-puertas-del-artico_d858be61_240118132530_800x800.jpg";
    const ImageFour = "https://content.nationalgeographic.com.es/medio/2024/03/15/canon-del-parque-nacional-de-zion-utah_3a537630_240315124915_800x800.jpg";

    return (
            <div className="container-fluid">
                <div className="row mx-3 row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    
                        <Card image = {ImageOne} title = "Wild Nature"/>
                        <Card image = {ImageTwo} title = "The Quiet Lady"/>
                        <Card image = {ImageThree} title = "Drawing Dreams"/>
                        <Card image = {ImageFour} title = "Endless cave"/>
                    
                </div>
            </div>
            )       
};

    Card.propTypes = {
        image:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
    }
    
export default Container;