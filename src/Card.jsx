import React from "react";


const Card = (props) => {
    return (
    <div className="row  row-cols mt-4 p-4 mx-0">
        <div className="col">
                <div className="card h-100">
                    <img src="https://content.nationalgeographic.com.es/medio/2022/07/28/roots-of-lyngen_03dbacb8_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est commodi exercitationem eum eius nisi molestiae inventore ducimus sequi tempora labore architecto consequuntur sed voluptatem officiis alias ipsa enim ex.</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                    
                </div>
        </div>
        <div className="col">
                <div className="card h-100">
                    <img src="https://content.nationalgeographic.com.es/medio/2021/10/02/ghost_4b27d58d_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro, nostrum velit laboriosam cum quidem eum. Ipsa quisquam consequuntur adipisci, delectus omnis, atque cumque nemo totam nulla itaque id quas.</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
        </div>
        <div className="col">
                <div className="card h-100">
                    <img src="https://content.nationalgeographic.com.es/medio/2024/01/18/parque-nacional-de-las-puertas-del-artico_d858be61_240118132530_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatibus molestiae laborum odio non explicabo facere ducimus blanditiis? Vel porro libero voluptas ab nesciunt tempora atque eum provident commodi doloremque.</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
        </div>
        <div className="col">
                <div className="card h-100">
                    <img src="https://content.nationalgeographic.com.es/medio/2024/03/15/canon-del-parque-nacional-de-zion-utah_3a537630_240315124915_800x800.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus necessitatibus repellat architecto totam sapiente quia quidem odit eius quisquam quam, a officia neque impedit voluptatibus laborum in, dignissimos suscipit excepturi?</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
        </div>
    </div>
)
}


export default Card;

