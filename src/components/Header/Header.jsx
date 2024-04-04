import React from "react"
import logo_blur from "../../assets/image/logo_blur.png"
import "./Header.css"

function Header(props) {
    return (
        <nav className="background_img_header">
            <ul className="flex justify-around p-4">
                <li>
                    <a href="" className="mb-0 uppercase text-white font-bold hover:underline">Homepage</a>
                </li>
                <li className="group inline-block relative">
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
                    <ul className="group-hover:block hidden transition absolute origin-top-right min-w-[800px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
                    <li className="">
                            <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#">One</a>
                        </li>
                        <li className="">
                            <a
                                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                            >Two</a>
                        </li>
                        <li className="">
                            <a
                                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#">Three is the magic number</a>
                        </li>
                    </ul>
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