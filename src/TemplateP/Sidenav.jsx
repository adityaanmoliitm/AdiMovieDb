import React from 'react'
import { Link } from 'react-router-dom';
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { FcAbout } from "react-icons/fc";


function Sidenav() {

    const linksData = [
        { icon: <FaFire />, text: 'trending' },
        { icon: <HiMiniSparkles />, text: 'popular' },
        { icon: <MdLocalMovies />, text: 'movie' },
        { icon: <PiTelevisionSimpleFill />, text: 'tv' },
        { icon: <IoPeople />, text: 'person' },
    ];

    return (
        <div className='lg:w-[25vw] md:w-[25vw] w-[35vw]  border-r-[2px] flex flex-col border-zinc-500 lg:p-[4vw] md:p-[3vw] p-[3vw]'>
                <div className='lg:text-[30px] md:text-[25px] text-[18px] text-white font-bold flex items-center gap-[2vw]'>
                    <div className='flex justify-center items-center min-w-[40px] '>
                        <PiTelevisionSimpleFill color='#6556CD' className='lg:text-[5vh] md:text-[4vh] text-[3vh] w-full h-full' />
                    </div>
                    <span > Cinema </span>
                </div>
                <nav className="flex flex-col text-zinc-400 text-xl gap-3 justify-center">
                    <h1 className=" text-white font-semibold lg:text-[2.3vw] md:text-[1.8vw] text-xl mt-10 mb-5">
                        New Feeds
                    </h1>
                    {linksData.map((link, index) => (
                        <Link
                            to={`/${link.text}`}
                            key={index}
                            className="hover:bg-[#6556CD] hover:text-white duration-300    uppercase items-center rounded-lg  p-[1.5vw] lg:text-[2vw] md:text-[2vw] text-sm  flex gap-[.5vw]"
                        >
                            <div className='min-w-[30px]'>
                            {link.icon}
                            </div>
                            <div>
                            {link.text}
                            </div>
                        </Link>
                    ))}

                </nav>
                <div className='border-[1px] border-zinc-300 mt-[1.5vw] mb-[1vw]' />
                <nav className="flex flex-col text-zinc-400 text-xl gap-3 justify-center">
                    <h1 className=" text-white font-semibold lg:text-[2.3vw] md:text-[1.8vw] text-xl mt-10 mb-5">
                        Information
                    </h1>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 items-center rounded-lg p-5 flex gap-[2vw]">
                        <FcAbout />
                        About Us
                    </Link>
                    <Link className="hover:bg-[#6556CD] hover:text-white duration-300 items-center rounded-lg p-5 flex gap-[2vw]">

                        <MdContacts />
                        Contact Us
                    </Link>

                </nav>
        </div>
    )
}

export default Sidenav