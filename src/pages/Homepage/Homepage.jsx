import React, {useEffect, useState} from 'react'
import Header from "../../components/Header/Header";
import homepage_introduce_1 from "../../assets/image/homepage_introduce_1.png";
import homepage_introduce_2 from "../../assets/image/homepage_introduce_2.png";
import homepage_introduce_3 from "../../assets/image/homepage_introduce_3.png";
import shrimp from "../../assets/image/shrimp.jpg";
import pho from "../../assets/image/pho.jpg";
import table_food from "../../assets/image/table_food.jpg";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import tree from "../../assets/image/tree.png";
import lecture from "../../assets/image/lecture.png";
import {Link} from "react-router-dom";
import './homepage.css'
function Homepage() {
    return (
        <>
            <div className="">
                <div className="container mx-auto pt-3">
                    <div className="p-10 mb-5">
                        <div className="xl:grid xl:grid-cols-12">
                            <div className="xl:col-span-4">
                                <h1 className="font-bold uppercase text-2xl text-[#5E6600]">Introduce</h1>
                                <p className="text-justify">Emerging yourself in the journey of discovering Vietnamese
                                    Cuisines in Dubai either at
                                    the Bank of Business Bay Dubai Canal or at the Heart of Dubai Silicon Oasis.
                                    Using the ingredients from Vietnam, Saigon Station is proud of the authenticity and
                                    home-made dishes. At Saigon Station, we believe that our diners will experience
                                    unforgettable moments.
                                </p>
                                <a
                                    href="/menu"
                                    className="block w-fit mt-2 px-5 py-3 rounded bg-[#6B4E4E] text-white hover:bg-[#916c6c] transition duration-300">View
                                    Details
                                </a>
                                {/*<div className="">*/}
                                {/*    <img src={vegetable} alt=""/>*/}
                                {/*</div>*/}
                            </div>
                            <div className="col-span-1"></div>
                            <div className="xl:col-span-7 xl:block hidden">
                                <div className="mt-3 grid grid-cols-3">
                                    <div className="">
                                        <img className="object-cover" src={homepage_introduce_2}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className="col-span-1">
                                        <img className="object-cover" src={homepage_introduce_1}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className="relative w-full">
                                        <img className="absolute translate-x-1/2 -bottom-5 object-cover" src={homepage_introduce_3}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:hidden">
                                <div className="mt-5 flex gap-2 ">
                                    <div className="">
                                        <img className="w-24 h-24 object-cover rounded-full" src={homepage_introduce_2}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className="">
                                        <img className="w-24 h-24 object-cover rounded-full" src={homepage_introduce_1}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className="">
                                        <img className="w-24 h-24 object-cover rounded-full" src={homepage_introduce_3}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*{false && <>*/}
                {/*    <div className="mb-5 sm:grid sm:grid-cols-3">*/}
                {/*        <div className="sm:col-span-1 w-full">*/}
                {/*            <Link>*/}
                {/*                <div className="relative group w-full h-[20rem]">*/}
                {/*                    <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                         alt="Saigon Station Food Introduce"/>*/}
                {/*                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                    <p className="absolute rounded top-[45%] left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                        details </p>*/}
                {/*                </div>*/}
                {/*            </Link>*/}
                {/*        </div>*/}

                {/*        <div className="sm:col-span-1 w-full sm:grid sm:grid-cols-2">*/}
                {/*            <div className="">*/}
                {/*                <Link>*/}
                {/*                    <div className="relative group w-full h-[10rem] ">*/}
                {/*                        <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                             alt="Saigon Station Food Introduce"/>*/}
                {/*                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                        <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                            Details</p>*/}
                {/*                    </div>*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*            <div className="">*/}
                {/*                <Link>*/}
                {/*                    <div className="relative group w-full h-[10rem] ">*/}
                {/*                        <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                             alt="Saigon Station Food Introduce"/>*/}
                {/*                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                        <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                            Details</p>*/}
                {/*                    </div>*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*            <div className="">*/}
                {/*                <Link>*/}
                {/*                    <div className="relative group w-full h-[10rem] ">*/}
                {/*                        <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                             alt="Saigon Station Food Introduce"/>*/}
                {/*                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                        <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                            Details</p>*/}
                {/*                    </div>*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*            <div className="">*/}
                {/*                <Link>*/}
                {/*                    <div className="relative group w-full h-[10rem] ">*/}
                {/*                        <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                             alt="Saigon Station Food Introduce"/>*/}
                {/*                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                        <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                            Details</p>*/}
                {/*                    </div>*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="sm:col-span-1 w-full">*/}
                {/*            <Link>*/}
                {/*                <div className="relative group w-full h-[20rem] ">*/}
                {/*                    <img className="w-full h-full object-cover" src={homepage_introduce_2}*/}
                {/*                         alt="Saigon Station Food Introduce"/>*/}
                {/*                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>*/}
                {/*                    <p className="absolute rounded top-[45%] left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View*/}
                {/*                        Details</p>*/}
                {/*                </div>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</>}*/}
                <div className="w-full px-10 py-16 mb-5 intro relative">
                    <div className="grid md:grid-cols-3 md:space-y-0 space-y-10 relative z-10">
                        <div className="flex-col items-center justify-center text-center">
                            <FoodBankIcon sx={{ fontSize: 100 }} color={'warning'}/>
                            <p style={{fontFamily:"Roboto"}} className='text-white text-lg p-1'>2 Branchs</p>
                        </div>
                        <div className="flex-col items-center justify-center text-center">
                            <BrunchDiningIcon sx={{ fontSize: 100 }} color={'warning'}/>
                            <p style={{fontFamily:"Roboto"}} className='text-white text-lg p-1'>90+ Items of Food</p>
                        </div>
                        <div className="flex-col items-center justify-center text-center">
                            <LocalDiningIcon sx={{ fontSize: 100 }} color={'warning'}/>
                            <p style={{fontFamily:"Roboto"}} className='text-white text-lg p-1'>Professional Chefs</p>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80"></div>

                </div>

                <div className="container mx-auto my-10 p-10">
                    <div className="lg:flex justify-center items-center gap-3 relative">
                        <div className="absolute top-0 -left-[15vh]">
                            <img className="h-[20rem] object-cover" src={tree} alt=""/>
                        </div>
                        <div className="flex order-2 gap-3 justify-center ">
                            <div className="md:w-[15rem] w-[9rem] mx-auto">
                                <img className="w-full object-cover rounded" src={pho} alt=""/>
                            </div>
                            <div className="md:w-[15rem] w-[9rem] mx-auto">
                                <img className="w-full object-cover rounded" src={homepage_introduce_2} alt=""/>
                            </div>
                        </div>

                        <div className="lg:mt-0 mt-5 order-1">
                            <p className="text-[#A1A1A1]">FOR YOU <span
                                className="block h-1 bg-gradient-to-r from-gray-400 to-transparent w-32"></span>
                            </p>
                            <h5 className="font-bold text-2xl">Vietnamese Noodle</h5>
                            <p className="text-justify">One of the PHOmous choices at Saigon Station, Pho is the National
                                food of Vietnam. With the
                                combination of flat rice noodle, thinly sliced ground beef, broth simmered from bones for 8
                                hours garnished with coriander and spring onions, together they blended perfectly and
                                produce the authentic taste of Vietnamese Pho.</p>
                            <p className="text-justify">You have the choices of Beef, chicken or also
                                vegan Pho. It is indeed the Phovarite choice of food for Vietnamese as well as Vietnamese
                                food lovers</p>
                            <a
                                href="/menu"
                                className="block w-fit rounded mt-2 px-5 py-3 bg-[#6B4E4E] text-white hover:bg-[#916c6c] transition duration-300">View
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
