import React from 'react';
import { Link } from 'react-router-dom';
import { HiSpeakerphone } from "react-icons/hi";
import { SiVlcmediaplayer } from "react-icons/si";

function Header({ data }) {
  return (
    <div
      style={{
        objectFit: "cover",
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className='text-white w-full rounded-2xl border-[.5px] border-zinc-500 flex flex-col justify-end items-start p-[6%]'>
      <div className='flex flex-col justify-center items-start'>
        <h1 className='w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-3'>
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className='w-full text-zinc-300 text-sm md:text-lg lg:text-xl mb-3'>
          {data.overview.slice(0, 200)}...
          <Link className='text-blue-500'>more</Link>
        </p>
        <div className='flex gap-[2vw] mb-3'>
          <div className='flex items-center gap-[.8vw]'>
            <HiSpeakerphone className='text-yellow-500 text-lg md:text-xl lg:text-2xl' />
            <span className='text-yellow-500 text-sm md:text-base lg:text-lg'>{data.release_date || "No Information"}</span>
          </div>
          <div className='flex items-center gap-[.8vw]'>
            <SiVlcmediaplayer className='text-yellow-500 text-lg md:text-xl lg:text-2xl' />
            <span className='text-yellow-500 text-sm md:text-base lg:text-lg'>{data.media_type.toUpperCase()}</span>
          </div>
        </div>
        <Link className='bg-[#6556CD] py-2 px-4 md:py-3 md:px-6 rounded-lg uppercase hover:shadow-lg hover:outline duration-200 text-sm md:text-base lg:text-lg'>Watch Trailer</Link>
      </div>
    </div>
  );
}

export default Header;
