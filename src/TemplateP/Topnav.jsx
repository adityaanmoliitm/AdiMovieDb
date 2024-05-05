import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaKeyboard } from "react-icons/fa";
import axios from '../Utils/axios'
import noimage from '../Utils/NoImage.jpeg'
function Topnav() {
    const [Querry, SetQuerry] = useState("");
    const [searches, setsearches] = useState(null);
    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${Querry}`);
            setsearches(data.results);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    }
    useEffect(() => {
        GetSearches();
    }, [Querry]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-[10vh] flex justify-center items-center gap-[1.5vw] z-100'>
                <div>
                    <FaSearch className='lg:text-[4vh] md:text-[2.5vh] text-[1.5vh]' color='gray' />
                </div>
                <div>
                    <input
                        placeholder='Search Any Movie...'
                        onChange={(e) => { SetQuerry(e.target.value) }}
                        value={Querry}
                        type='text'
                        className='w-[45vw] bg-zinc-200 outline-none rounded-lg lg:h-[4.5vh] md:h-[3.5vh] h-[2.5vh] text-[2vh] p-[1vw] font-semibold text-zinc-900'>
                    </input>
                </div>
                <div>
                    {
                        Querry.length > 0 ?
                            (<ImCross className='lg:text-[4vh] md:text-[2.5vh] text-[1.5vh] cursor-pointer' color='#6556CD' onClick={() => { SetQuerry("") }} />) :
                            (<FaKeyboard className='lg:text-[4vh] md:text-[2.5vh] text-[1.5vh] cursor-pointer' color='#6556CD' />)
                    }
                </div>

            </div>

            <div className='w-[45vw] bg-zinc-200 rounded-lg max-h-[40vh]  top-[11vh] overflow-auto absolute z-50'>
                {searches !== null && searches.length > 0 && (
                    searches.map((s, idx) => (
                        <Link
                            key={idx}
                            className="hover:text-black  hover:bg-zinc-400 duration-300 font-semibold text-zinc-700 p-[3.5vh] flex justify-start items-center border-b-2 gap-[1.5vw] border-white"
                        >
                            <img
                                className="w-[10vw] h-[10vh] object-cover rounded mr-5 shadow-lg"

                                src={
                                    s.backdrop_path || s.profile_path ?
                                        `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                                        :
                                        noimage
                                }
                                alt=""
                            />
                            <span>
                                {s.name || s.title || s.original_name || s.original_title}
                            </span>
                        </Link>
                    ))
                )}
            </div>

        </div >
    )
}

export default Topnav;