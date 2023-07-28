import React, { useState } from "react";
import {
    HomeIcon,
    PhoneIcon,
    BuildingOfficeIcon,
    MapPinIcon,
    Bars3BottomLeftIcon,
    XMarkIcon,
    ChartPieIcon,
    BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../../../public/assets/image/iapm-logo.webp";

const SideBar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleNav = () => {
        setOpen((e) => !e);
    };

    return (
        <>
            <aside
                id="sideBar"
                className={`fixed top-0 shadow-sm border-r border-r-gray-100 w-72 left-0 z-20 font-inter  h-screen transition-transform ${
                    isOpen === true ? "translate-x-0" : "-translate-x-full"
                } `}
                aria-label="Sidebar"
            >
                <div className="h-full px-8 py-4 pt-28 overflow-y-auto bg-gray-50">
                    <ul className="space-y-4 font-medium mb-4">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-amber-500 group"
                            >
                                <BuildingStorefrontIcon className="w-6 h-6" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Service Product
                                </span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                                    Pro
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contacts"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-amber-500 group"
                            >
                                <PhoneIcon className="w-6 h-6" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Contact
                                </span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium  bg-blue-100 rounded-full">
                                    3
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-amber-500 group"
                            >
                                <MapPinIcon className="w-6 h-6" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Address
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-amber-500 group"
                            >
                                <ChartPieIcon className="w-6 h-6" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Analytic
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="w-full z-20 bg-gray-50 py-2 fixed flex justify-between items-center md:px-8 px-4 shadow-sm">
                <button
                    onClick={handleNav}
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open sidebar</span>

                    {isOpen === true ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3BottomLeftIcon className="w-6 h-6" />
                    )}
                </button>
                <a href="" className="block w-32 h-8">
                    <img src={Logo} alt="" />
                </a>
                <div>
                    <img
                        src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                        className="w-10 h-10 object-cover rounded-full border-4 border-gray-300"
                        alt="avatar"
                    />
                </div>
            </div>
        </>
    );
};

export default SideBar;
