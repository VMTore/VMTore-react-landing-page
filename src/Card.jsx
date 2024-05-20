import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
    <div className="mt-4">
        <div className="col md-3 sm-6 mb-4">
                <div className="card h-100 w-100 d-flex" style={{border:"outset"}}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title d-flex justify-content-center">{props.title}</h4>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est commodi exercitationem eum eius nisi molestiae inventore ducimus sequi.</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-primary btn-sm d-md-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>  
                </div>
        </div>
        
    </div>
)
}

Card.propTypes = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    text:PropTypes.string,
}




export default Card;



