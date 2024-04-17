import React from 'react'
import Header from "../../components/Header/Header";
import homepage_introduce_1 from "../../assets/image/homepage_introduce_1.png";
import homepage_introduce_2 from "../../assets/image/homepage_introduce_2.png";
import homepage_introduce_3 from "../../assets/image/homepage_introduce_3.png";
import tree from "../../assets/image/tree.png";
import lecture from "../../assets/image/lecture.png";
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <>
            <div className="">
                {/*<Header/>*/}
                <div className="container mx-auto py-3">
                    <div className="py-5 mb-5">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <h1 className="font-bold uppercase text-[5rem] text-[#5E6600]">Introduce</h1>
                                <p className="text-justify">Emerging yourself in the journey of discovering Vietnamese
                                    Cuisines in Dubai either at
                                    the Bank of Business Bay Dubai Canal or at the Heart of Dubai Silicon Oasis.
                                    Using the ingredients from Vietnam, Saigon Station is proud of the authenticity and
                                    home-made dishes. At Saigon Station, we believe that our diners will experience
                                    unforgettable moments.
                                </p>
                                <button
                                    className="mt-2 px-5 py-3 rounded bg-[#6B4E4E] text-white hover:bg-[#916c6c] transition duration-300">View
                                    Details
                                </button>
                                {/*<div className="">*/}
                                {/*    <img src={vegetable} alt=""/>*/}
                                {/*</div>*/}
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-7">
                                <div className="mt-3 grid grid-cols-3">
                                    <div className="">
                                        <img className="object-cover" src={homepage_introduce_2}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className=" ">
                                        <img className="object-cover" src={homepage_introduce_1}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>
                                    <div className="relative w-full">
                                        <img className="absolute translate-x-1/2 -bottom-5 object-cover" src={homepage_introduce_3}
                                             alt="Saigon Station Food Introduce"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mb-5 sm:grid sm:grid-cols-3">
                    <div className="sm:col-span-1 w-full">
                        <Link>
                            <div className="relative group w-full h-[20rem]">
                                <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                     alt="Saigon Station Food Introduce"/>
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                <p className="absolute rounded top-[45%] left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                    details </p>
                            </div>
                        </Link>
                    </div>

                    <div className="sm:col-span-1 w-full sm:grid sm:grid-cols-2">
                        <div className="">
                            <Link>
                                <div className="relative group w-full h-[10rem] ">
                                    <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                         alt="Saigon Station Food Introduce"/>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                    <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                        Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="">
                            <Link>
                                <div className="relative group w-full h-[10rem] ">
                                    <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                         alt="Saigon Station Food Introduce"/>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                    <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                        Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="">
                            <Link>
                                <div className="relative group w-full h-[10rem] ">
                                    <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                         alt="Saigon Station Food Introduce"/>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                    <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                        Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="">
                            <Link>
                                <div className="relative group w-full h-[10rem] ">
                                    <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                         alt="Saigon Station Food Introduce"/>
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                    <p className="absolute rounded top-1/3 left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                        Details</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="sm:col-span-1 w-full">
                        <Link>
                            <div className="relative group w-full h-[20rem] ">
                                <img className="w-full h-full object-cover" src={homepage_introduce_2}
                                     alt="Saigon Station Food Introduce"/>
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                                <p className="absolute rounded top-[45%] left-1/2 -translate-x-1/2 bg-[#6B4E4E] text-white p-3 transform duration-300 group-hover:underline">View
                                    Details</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto py-3">
                    <div className="grid md:grid-cols-2">
                        <div className="flex gap-3 justify-center relative">
                            <div className="absolute -left-10 -translate-x-1/2">
                                <img className="h-[20rem] object-cover" src={tree} alt=""/>
                            </div>
                            <div className="w-[15rem]">
                                <img className="w-full object-cover" src={homepage_introduce_2} alt=""/>
                            </div>
                            <div className="w-[15rem]">
                                <img className="w-full object-cover" src={homepage_introduce_2} alt=""/>
                            </div>
                        </div>

                        <div className=" my-auto">
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
                            <button
                                className="rounded mt-2 px-5 py-3 bg-[#6B4E4E] text-white hover:bg-[#916c6c] transition duration-300">View
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
