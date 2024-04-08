import React from 'react'
import Slider from 'react-slick';
import "./carousel.css"

function Menupage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className="bg-[#7D9980] mx-auto">
            <div className="slide-container w-full max-w-[90%] mx-auto">
                <Slider>
                   <div className="">Xin chào</div>
                   <div className="">Xin chào</div>
                   <div className="">Xin chào</div>
                   <div className="">Xin chào</div>
                </Slider>
            </div>
        </div>
    )
}

export default Menupage
