import React from 'react'
import Slider from 'react-slick';
import "./carousel.css"
import menu1 from "../../assets/image/menu/menu-update_page-0001.jpg";
import menu2 from "../../assets/image/menu/menu-update_page-0002.jpg";
import menu3 from "../../assets/image/menu/menu-update_page-0003.jpg";
import menu4 from "../../assets/image/menu/menu-update_page-0004.jpg";
import menu5 from "../../assets/image/menu/menu-update_page-0005.jpg";
import menu6 from "../../assets/image/menu/menu-update_page-0006.jpg";
import menu7 from "../../assets/image/menu/menu-update_page-0007.jpg";
import menu8 from "../../assets/image/menu/menu-update_page-0008.jpg";

function Menupage() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className="bg-[#7D9980] mx-auto">
            <div className="slide-container xl:max-w-[70rem] lg:max-w-[55rem] md:max-w-[40rem] max-w-[15rem] mx-auto">
                <Slider {...settings}>
                    <img className="sm:h-screen" src={menu1} alt=""/>
                    <img className="sm:h-screen" src={menu2} alt=""/>
                    <img className="sm:h-screen" src={menu3} alt=""/>
                    <img className="sm:h-screen" src={menu4} alt=""/>
                    <img className="sm:h-screen" src={menu5} alt=""/>
                    <img className="sm:h-screen" src={menu6} alt=""/>
                    <img className="sm:h-screen" src={menu7} alt=""/>
                    <img className="sm:h-screen" src={menu8} alt=""/>
                </Slider>
            </div>
        </div>
    )
}

export default Menupage
