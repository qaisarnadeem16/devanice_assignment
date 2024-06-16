'use client'
import React, { useEffect, useState, ReactNode } from 'react';
import SideBar from '@/components/layout/sidebar';
import AdminNavbar from '@/components/layout/navbar';
import Footer from '@/components/shared/footer/footer';
import { GoQuestion } from "react-icons/go";
interface LayoutProps {
    children: ReactNode;
}


const layout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const [dropdowm, setDropdown] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div className="flex w-full h-screen bg-[#F6F8FA] overflow-hidden">
            <div className="w-4/5 absolute lg:relative z-40 bg-primary lg:w-1/5">
                <SideBar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            </div>
            <div className="lg:w-full  flex flex-col w-full py-1 overflow-y-auto no-scrollbar">
                <AdminNavbar onToggleSidebar={toggleSidebar} />
                <div className="w-full  py-3" onClick={() => setSidebarVisible(true)}>
                    {children}
                </div>

                <div className="flex justify-end py-3 px-5 ">
                    <div className="relative">
                        <div onClick={() => setDropdown(!dropdowm)} className="inline-flex gap-3 items-center overflow-hidden rounded-md boxShadow py-2 px-3 bg-white">
                            <GoQuestion />   Help Center
                            <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                                <span className="sr-only">Menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {dropdowm &&
                            <div
                                className="absolute end-0 z-10 mt-2 w-56 rounded-md  bg-white shadow-lg"
                                role="menu"
                            >
                                <div className="p-2">
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                        role="menuitem"
                                    >
                                        View on Storefront
                                    </a>
                                </div>
                            </div>}
                    </div>
                </div>
                <div className="">
                    <Footer />

                </div>
            </div>
        </div>
    );
};

export default layout;
