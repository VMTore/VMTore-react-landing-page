import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
    <div className="mt-4">
        <div className="col">
                <div className="card d-flex" style={{border:"outset", marginInline:"10px"}} >
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title d-flex justify-content-center">{props.title}</h4>
                        <p className="card-text justify-content-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est commodi exercitationem eum eius nisi molestiae inventore ducimus sequi.</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-secondary btn-sm d-md-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>  
                </div>
        </div>
        
    </div>
)
}

Card.propTypes = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}

export default Card;



