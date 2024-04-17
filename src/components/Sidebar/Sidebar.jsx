import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import logo from '../../assets/image/logo_blur.png';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }


    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Xử lý khi click ra ngoài để đóng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-button')) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="flex">
            {/*Mobile Sidebar*/}
            {isOpen && (
                <>
                    <div
                        className="min-h-screen flex flex-shrink-0 bg-gray-50 text-gray-800 md:hidden block">
                        <div
                            className="fixed flex flex-col top-0 left-0 w-[13rem] bg-white h-full border-r"
                        >
                            <div className="flex items-center justify-center h-[12rem] border-b text-[#233000]">
                                <Link to="/" className="font-semibold">
                                    <img className="object-cover" src={logo} alt="Saigon Station"/>
                                    <p className="text-center">Saigon Station</p>
                                </Link>
                            </div>
                            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                                <ul className="flex flex-col py-4 space-y-1">
                                    <li>
                                        <Link to='/'
                                              href="#"
                                              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span
                    className="material-icons material-icons-outlined inline-flex justify-center items-center ml-4"
                >
                  home
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <a
                                            href="#"
                                            className="flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 dropdown-button"
                                            onClick={toggleDropdown}
                                        >
          <span className="material-icons material-icons-outlined inline-flex items-center ml-4">
            restaurant
          </span>
                                            <button className="ml-2 text-sm tracking-wide truncate">
                                                Menu
                                            </button>
                                            <span className="text-end"><ArrowDropDownIcon/></span>
                                        </a>
                                    </li>
                                    {isDropdownOpen && (
                                        <li>
                                            <ul className="pl-2">
                                                {/* Đặt nội dung của dropdown ở đây */}
                                                <li>
                                                    <Link to='/'
                                                          href="#"
                                                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                        <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/'
                                                          href="#"
                                                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                        <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                    </li>
                                    )}

                                    <li>
                                        <a
                                            href="#"
                                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                                        >
                <span
                    className="material-icons material-icons-sharp inline-flex justify-center items-center ml-4"
                >
                  my_location
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate"
                                            >Contact</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                                        >
                <span
                    className="material-icons material-icons-outlined inline-flex justify-center items-center ml-4"
                >
                  article
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Event</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className={isOpen ? "ml-[13rem]" : "flex-1"}>
                <button className="p-2 rounded shadow" onClick={(e) => handleOpen()}>
                    <MenuIcon/>
                </button>
            </div>
        </div>

    );
};

export default Sidebar;
