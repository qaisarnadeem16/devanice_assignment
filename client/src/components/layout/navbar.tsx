'use client'
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import profile from "/public/assets/profile.png"
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

interface AdminNavbarProps {
    onToggleSidebar: () => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ onToggleSidebar }) => {

    const path = usePathname();

    const pathToTitle: { [key: string]: string } = {
        "/designer/createWork": "My Work",
        "/testLibrary": "Test Library",
        "/payments": "Payments",
        "/mycandidates": "My candidates",
        "/profile": "My profile",
        "/recruitment": "My Recruitment",
    };
    const title = pathToTitle[path] || "";

    return (
        <div className="w-full relative top-0 right-0 md:px-6 px-3 py-3">
            <div className="p-0 flex gap-2 justify-between md:gap-6 items-center text-[#666666]">
                <div>
                    <h2 className="text-[#142D52] block font-bold md:text-2xl text-lg capitalize">
                        {title}
                    </h2>
                </div>
                <div className="md:flex hidden gap-4 items-center">
                    <button className="">
                        <IoNotifications className="text-[#BABABA] text-2xl" />
                    </button>

                    <div className="flex   justify-center gap-2 items-center relative">
                        <Image
                            src={profile}
                            alt=""
                            className="rounded-full  border  h-[52px] w-[52px] object-fill "
                        />
                        <h2 className=" text-[#585858] text-base spacing-[1px]">
                            John Doe
                        </h2>

                        <button className="">
                            <MdKeyboardArrowDown className="text-[#585858] text-lg mt-1" />
                        </button>
                    </div>

                </div>
                <div className="menubtn lg:hidden block">
                    <button
                        className="btn mx-1 border-2 rounded-lg border-gray-500 p-1"
                        onClick={onToggleSidebar}
                    >
                        <CgMenuLeft className="text-2xl text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
