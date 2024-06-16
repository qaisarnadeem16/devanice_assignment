import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fb, Insta, LD, Twitter } from "@/svgs";
import { FiSend } from "react-icons/fi";
type Props = {};



const socialMedias = [
  { icon: <Fb />, url: "" },
  { icon: <Twitter />, url: "" },
  { icon: <Insta />, url: "" },
  { icon: <LD />, url: "" },
];

const quickLinks = [
  { label: "Services", url: "/" },
  { label: "Pricing", url: "/" },
  { label: "Contact", url: "/" },
];

const quickLinks2 = [
  {
    label: "Terms of Services", url: "/"
  },
  { label: "Terms of Sales", url: "/" },
  { label: "Privacy policy & Cookies", url: "/" },
];

const otherLink = [
  {
    label: "For subject-matter experts", url: "/"
  },
  { label: "Help center", url: "/" },
  { label: "Information for candidates", url: "/" },
];

const Footer = (props: Props) => {
  return (
    <>

      <div className="md:px-5 bg-[#f4fbfa]">
        <div className="md:px-16 px-5 md:py-16 py-10 grid md:grid-cols-2 lg:grid-cols-4 items-start gap-10 w-full">
          <div className="w-full flex flex-col gap-5 items-start">

            <div className="flex flex-col gap-3 items-start">
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="hover:scale-110 duration-300 transition-all text-sm text-[#827F7F]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>


          <div className="flex flex-col gap-3 items-start md:text-base text-sm">
            {quickLinks2.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="hover:scale-110 duration-300 transition-all text-sm text-[#827F7F]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-start   md:text-base text-sm">
            {otherLink.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="hover:scale-110 duration-300 transition-all text-sm text-[#827F7F]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-start   md:text-base text-sm">
            <div className="flex gap-4 items-center">
              {socialMedias.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="hover:scale-110 duration-300 transition-all text-sm text-[#827F7F]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <p className="text-sm text-[#827F7F]">Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector.</p>

            <div className="flex justify-between bg-white px-2  items-center">
              <input type="text" className="border-0 focus:outline-none py-4 px-2 text-gray font-medium" placeholder="Enter Your Email" />
              <button type="submit" className="py-3 px-5 rounded bg-green text-base text-white font-medium">
                <FiSend />
              </button>
            </div>
          </div>



        </div>
      </div>

      <p className="text-center text-base text-[#8C8C8C] py-3">© CertiJob 2021. All rights reserved.</p>
    </>
  );
};

export default Footer;
