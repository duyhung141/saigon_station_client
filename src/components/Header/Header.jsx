import React from "react"
import logo_blur from "../../assets/image/logo_blur.png"
import "./Header.css"
import Slider from 'react-slick';
import "./carousel.css"
import homepage_introduce_1 from "../../assets/image/homepage_introduce_1.png";

function Header(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <nav className="background_img_header relative">
            <ul className="flex justify-around p-4">
                <li>
                    <a href="" className="mb-0 uppercase text-white font-bold hover:underline">Homepage</a>
                </li>
                <li className="group inline-block ">
                    <button
                        className="mb-0 uppercase text-white font-bold inline-flex items-center hover:underline"> Menu
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>

                    {/*Sub Menu*/}
                    <div className="group-hover:block hidden transition absolute left-[5%] w-full max-w-[90%] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <a className="bg-[#09511D] border hover:bg-[#09511D]/80 py-2 px-4 block whitespace-no-wrap"
                                       href="#">
                                        <img className="mx-auto w-[10rem] object-cover" src={homepage_introduce_1}
                                             alt="Saigon Station Food Introduce"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="bg-[#09511D] border hover:bg-[#09511D]/80 py-2 px-4 block whitespace-no-wrap"
                                       href="#">
                                        <img className="mx-auto w-[10rem] object-cover" src={homepage_introduce_1}
                                                     alt="Saigon Station Food Introduce"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="bg-[#09511D] border hover:bg-[#09511D]/80 py-2 px-4 block whitespace-no-wrap"
                                       href="#">
                                        <img className="mx-auto w-[10rem] object-cover" src={homepage_introduce_1}
                                                     alt="Saigon Station Food Introduce"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="bg-[#09511D] border hover:bg-[#09511D]/80 py-2 px-4 block whitespace-no-wrap"
                                       href="#">
                                        <img className="mx-auto w-[10rem] object-cover" src={homepage_introduce_1}
                                                     alt="Saigon Station Food Introduce"/>
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    {/*End Sub Menu*/}
                </li>
                <li>
                    <img src={logo_blur} alt="Saigon Station Logo"/>
                </li>
                <li>
                    <a href="" className="mb-0 uppercase text-white font-bold group-hover: hover:underline">Homepage</a>
                </li>
                <li>
                    <a href="" className="mb-0 uppercase text-white font-bold hover:underline">Homepage</a>
                </li>
            </ul>
        </nav>

    )
}

export default Header