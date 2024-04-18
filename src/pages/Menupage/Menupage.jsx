import React, {useRef} from 'react'
import Slider from 'react-slick';
import "./carousel.css"
import menu1 from '../../assets/image/menu/menu-update_page-0001.jpg';
import menu2 from '../../assets/image/menu/menu-update_page-0002.jpg';
import menu3 from '../../assets/image/menu/menu-update_page-0003.jpg';
import menu4 from '../../assets/image/menu/menu-update_page-0004.jpg';
import menu5 from '../../assets/image/menu/menu-update_page-0005.jpg';
import menu6 from '../../assets/image/menu/menu-update_page-0006.jpg';
import menu7 from '../../assets/image/menu/menu-update_page-0007.jpg';
import menu8 from '../../assets/image/menu/menu-update_page-0008.jpg';
import menu9 from '../../assets/image/menu/menu-update_page-0009.jpg';
import menu10 from '../../assets/image/menu/menu-update_page-0010.jpg';
import menu11 from '../../assets/image/menu/menu-update_page-0011.jpg';
import menu12 from '../../assets/image/menu/menu-update_page-0012.jpg';
import menu13 from '../../assets/image/menu/menu-update_page-0013.jpg';
import menu14 from '../../assets/image/menu/menu-update_page-0014.jpg';
import menu15 from '../../assets/image/menu/menu-update_page-0015.jpg';
import menu16 from '../../assets/image/menu/menu-update_page-0016.jpg';
import menu17 from '../../assets/image/menu/menu-update_page-0017.jpg';
import menu18 from '../../assets/image/menu/menu-update_page-0018.jpg';
import menu19 from '../../assets/image/menu/menu-update_page-0019.jpg';
import menu20 from '../../assets/image/menu/menu-update_page-0020.jpg';
import menu21 from '../../assets/image/menu/menu-update_page-0021.jpg';
import menu22 from '../../assets/image/menu/menu-update_page-0022.jpg';
import menu23 from '../../assets/image/menu/menu-update_page-0023.jpg';
import menu24 from '../../assets/image/menu/menu-update_page-0024.jpg';
import menu25 from '../../assets/image/menu/menu-update_page-0025.jpg';
import menu26 from '../../assets/image/menu/menu-update_page-0026.jpg';
import menu27 from '../../assets/image/menu/menu-update_page-0027.jpg';
import menu28 from '../../assets/image/menu/menu-update_page-0028.jpg';
import menu29 from '../../assets/image/menu/menu-update_page-0029.jpg';
import menu30 from '../../assets/image/menu/menu-update_page-0030.jpg';
import menu31 from '../../assets/image/menu/menu-update_page-0031.jpg';
import menu32 from '../../assets/image/menu/menu-update_page-0032.jpg';
import menu33 from '../../assets/image/menu/menu-update_page-0033.jpg';
import menu34 from '../../assets/image/menu/menu-update_page-0034.jpg';
import menu35 from '../../assets/image/menu/menu-update_page-0035.jpg';
import menu36 from '../../assets/image/menu/menu-update_page-0036.jpg';
import menu37 from '../../assets/image/menu/menu-update_page-0037.jpg';
import menu38 from '../../assets/image/menu/menu-update_page-0038.jpg';
import menu39 from '../../assets/image/menu/menu-update_page-0039.jpg';
import menu40 from '../../assets/image/menu/menu-update_page-0040.jpg';
import menu41 from '../../assets/image/menu/menu-update_page-0041.jpg';
import menu42 from '../../assets/image/menu/menu-update_page-0042.jpg';
import menu43 from '../../assets/image/menu/menu-update_page-0043.jpg';
import menu44 from '../../assets/image/menu/menu-update_page-0044.jpg';
import menu45 from '../../assets/image/menu/menu-update_page-0045.jpg';
import menu46 from '../../assets/image/menu/menu-update_page-0046.jpg';
import menu47 from '../../assets/image/menu/menu-update_page-0047.jpg';
import menu48 from '../../assets/image/menu/menu-update_page-0048.jpg';
import menu49 from '../../assets/image/menu/menu-update_page-0049.jpg';
import menu50 from '../../assets/image/menu/menu-update_page-0050.jpg';
import {useLocation} from "react-router-dom";
import queryString from 'query-string';


function Menupage() {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const start = parseInt(queryParams.start ?? 1) - 1;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: start,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },

            },
        ]
    };
    const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10,
        menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19, menu20, menu21,
        menu22, menu23, menu24, menu25, menu26, menu27, menu28, menu29, menu30, menu31, menu32,
        menu33, menu34, menu35, menu36, menu37, menu38, menu39, menu40, menu41, menu42, menu43,
        menu44, menu45, menu46, menu47, menu48, menu49, menu50];


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className="bg-[#7D9980] mx-auto p-10">
            <div
                className="slide-container relative xl:max-w-[70rem] lg:max-w-[55rem] md:max-w-[40rem] max-w-[15rem] mx-auto">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {
                        menuImages.map((menuImage, index) => (
                            <img key={index} className="sm:h-screen" src={menuImage} alt={"menu" + index}/>
                        ))
                    }
                    <img className="sm:h-screen" src={menu1} alt=""/>
                    <img className="sm:h-screen" src={menu2} alt=""/>
                    <img className="sm:h-screen" src={menu3} alt=""/>
                    <img className="sm:h-screen" src={menu4} alt=""/>
                    <img className="sm:h-screen" src={menu5} alt=""/>
                    <img className="sm:h-screen" src={menu6} alt=""/>
                    <img className="sm:h-screen" src={menu7} alt=""/>
                    <img className="sm:h-screen" src={menu8} alt=""/>
                </Slider>
                <button className="absolute top-1/2 -translate-y-1/2 right-0" onClick={next}>
                    <span
                        className="material-icons material-icons-outlined text-[#2e7d32] lg:text-4xl inline-flex justify-center items-center ml-4"
                    >arrow_forward_ios</span>
                    {/*<ArrowForwardIosIcon fontSize={'large'} color={'success'}/>*/}
                </button>

                <button className="absolute top-1/2 -translate-y-1/2 left-0" onClick={previous}>
                <span
                    className="material-icons material-icons-outlined text-[#2e7d32] lg:text-4xl inline-flex justify-center items-center ml-2"
                >arrow_back_ios</span>
                </button>
            </div>
        </div>
    )
}

export default Menupage
