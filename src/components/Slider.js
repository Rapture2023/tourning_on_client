import React from 'react'

const Slider = () => {
    return (
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-start" data-bs-interval="10000" style={{height: '600px'}}>
                    <img className="bd-placeholder-img object-fit-cover bd-placeholder-img-lg d-block w-100 carousel-img-1"  src="1.jpg" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
                <div className="carousel-item carousel-item-next carousel-item-start" data-bs-interval="2000" style={{height: '600px'}}>
                    <img className="bd-placeholder-img bd-placeholder-img-lg object-fit-cover d-block w-100 carousel-img-1"  src="2.jpg" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
                <div className="carousel-item" style={{height: '600px'}}>
                    <img className="bd-placeholder-img bd-placeholder-img-lg d-block object-fit-cover w-100 carousel-img-1" src="3.jpg" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    )
}

export default Slider