import React from "react";


const Card = (props) => {
    return (
    <div className="row  row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mt-4 p-0 mx-5 border-none">
        <div className="col mb-4">
                <div className="card h-100 w-100 d-flex flex-column">
                    <img src="https://content.nationalgeographic.com.es/medio/2022/07/28/roots-of-lyngen_03dbacb8_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title d-flex justify-content-center justify-content-center">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est commodi exercitationem eum eius nisi molestiae inventore ducimus sequi tempora labore architecto consequuntur sed voluptatem officiis alias ipsa enim ex.</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-primary btn-sm d-md-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>  
                </div>
        </div>
        <div className="col mb-4">
                <div className="card h-100 w-100 d-flex flex-column">
                    <img src="https://content.nationalgeographic.com.es/medio/2021/10/02/ghost_4b27d58d_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title d-flex justify-content-center justify-content-center">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam ullam sunt, quisquam quam ipsam quibusdam reiciendis animi? Delectus quis quia laboriosam provident natus rerum pariatur est blanditiis ducimus magnam?</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-primary btn-sm d-md-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>
                </div>
        </div>
        <div className="col mb-4">
                <div className="card h-100 w-100 d-flex flex-column">
                    <img src="https://content.nationalgeographic.com.es/medio/2024/01/18/parque-nacional-de-las-puertas-del-artico_d858be61_240118132530_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title d-flex justify-content-center justify-content-center">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatibus molestiae laborum odio non explicabo facere ducimus blanditiis? Vel porro libero voluptas ab nesciunt tempora atque eum provident commodi doloremque.</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-primary btn-sm d-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>
                </div>
        </div>
        <div className="col mb-4">
                <div className="card h-100 w-100 d-flex flex-column">
                    <img src="https://content.nationalgeographic.com.es/medio/2024/03/15/canon-del-parque-nacional-de-zion-utah_3a537630_240315124915_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center justify-content-center">Card title</h5>
                        <p className="card-text d-flex flex-column">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus necessitatibus repellat architecto totam sapiente quia quidem odit eius quisquam quam, a officia neque impedit voluptatibus laborum in, dignissimos suscipit excepturi?</p>
                        <a href="https://www.google.com/" target="_blank" className="btn btn-primary btn-sm d-flex justify-content-center mt-auto">Find Out More!</a>
                    </div>
                </div>
        </div>
    </div>
)
}


export default Card;

