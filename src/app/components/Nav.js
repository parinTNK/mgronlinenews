"use client";
import { IoMenu, IoSearch } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
import Image from 'next/image';
import { FiArrowRight } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";

function Nav() {
return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-2 bg-white shadow-md md:p-2">
        <a
          href="https://www.mgronline.com"
          className="flex items-center cursor-pointer"
        >
            <IoMenu className='text-2xl text-gray-500' />
            <Image
                src="/MGR.png"
                alt="Logo"
                width={80}
                height={30}
                className="inline-block ml-2 h-7 w-auto md:h-7"
            />
        </a>
        <div className="hidden md:flex items-center border-gray-300 border rounded-2xl overflow-hidden">
            <input
                type="text"
                placeholder="ค้นหา"
                className="border-none p-2 w-[500px] focus:outline-none h-2 font-THSarabunNew placeholder:text-xl placeholder:text-gray-500 "
            />
            <button className="p-1 border-l  border-gray-300 bg-gray-50 hover:bg-gray-100">
                <IoSearch className="text-gray-600 text-lg mx-5" />
            </button>
        </div>
        <a
          href="https://www.mgronline.com"
          className="flex items-center space-x-2 md:space-x-0 cursor-pointer"
        >
          <Image
              src="/123.png"
              alt="Logo"
              width={100}
              height={100}
              className="inline-block w-[20px] h-[20px] md:hidden rounded-lg"
          />
          <IoSearch className="text-gray-400 text-xl md:hidden" />
          <Image
              src="/New1.png"
              alt="Logo"
              width={100}
              height={100}
              className="md:w-[60px] md:h-[20px] hidden md:inline-block rounded-md"
          />
          <Image
              src="/New3.png"
              alt="Logo"
              width={25}
              height={25}
              className="inline-block md:w-[65px] md:h-[25px] md:hidden rounded-lg"
          />
          <button className="hidden md:block ml-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              ลงชื่อเข้าใช้
          </button>
          <button className="md:hidden bg-blue-500 text-white p-1 rounded-full">
                  <FaSignInAlt className="w-4 h-4" />
          </button>
          <GoKebabHorizontal className='text-xl text-gray-500 ml-1 md:ml-4' style={{ transform: 'rotate(90deg)' }} />
        </a>
    </nav>
)
}

export default Nav