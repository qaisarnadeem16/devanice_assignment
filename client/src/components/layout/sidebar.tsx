'use client'
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import logo from "/public/assets/logo.svg"
import Image from "next/image";
import { Candient, Payment, Profile, Recuriment, Test } from "@/svgs";

interface SideBarProps {
    isSidebarVisible: boolean;
    toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarVisible, toggleSidebar }) => {
    const location = usePathname();

    const isActive = (path: string): string => {
        return location === path ? "!text-white !font-medium " : "";
    };

    const items = [
        {
            name: "Test Library",
            url: "/testLibrary",
            svg: <Test />,
        },
        {
            name: "Payments",
            url: "/payments",
            svg: <Payment />,
        },
        {
            name: "My candidates",
            url: "/mycandidates",
            svg: <Candient />,
        },
        {
            name: "My profile",
            url: "/recruitment",
            svg: <Profile />,
        },
        {
            name: "My Recruitment",
            url: "/recruitment",
            svg: <Recuriment />,
        },

    ];

    return (
        <>
            <div
                className={`lg:block bg-primary   w-full lg:relative absolute ${isSidebarVisible ? "hidden" : "block absolute"
                    } sm:h-full h-screen`}
                id="responsiveSideBar"
            >
                <div className="w-full">
                    <div className="flex justify-center gap-4 items-center relative">
                        <Image
                            src={logo}
                            alt=""
                            className=" py-8 border mx-auto object-fill"
                        />
                    </div>

                    <div className="flex flex-col justify-center  gap-3  px-10 w-full">

                        {items.map((item, i) => (
                            <Link href={item.url} key={i}>
                                <div
                                    className={`flex items-center gap-3 py-3  rounded-[5px] text-base cursor-pointer text-textColor ${isActive(
                                        item.url
                                    )}`}
                                >
                                    {item.svg}
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center border-t w-4/5 mx-auto mt-5 border-green">
                        <p className="text-xs text-textColor text-center pt-5 ">Lorem ipsum dolor sit amet, consec
                            tetur adipiscing elit. </p>
                    </div>
                </div>

                <button className="py-2 absolute bottom-2 mx-auto left-[25%] px-4 rounded-md bg-green text-sm text-white font-medium">Upgrade Now</button>
            </div>
        </>
    );
};

export default SideBar;
