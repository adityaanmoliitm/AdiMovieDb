import React from 'react';

function Horizontal({ data, func }) {
  return (
    <div className='w-full p-[1vw] flex flex-col'>
      <div className='mt-[2vh] pt-[10px] gap-x-[12px] w-full flex overflow-x-auto'>
        {data !== null && data.length > 0 && (
          data.map((d, idx) => (
            <div key={idx} className='min-w-[170px] bg-black h-full flex flex-col items-center mb-[2vh] cursor-pointer overflow-hidden'>
              <div className='w-full h-[20vh] hover:scale-105'>
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
                  alt=""
                />
              </div>
              <div className='h-[28vh] overflow-auto flex flex-col'>
                <div className=' px-4 w-full flex flex-col justify-center items-center '>
                  <h1 className='w-full text-white text-lg font-bold'>
                    {d.name || d.title || d.original_name || d.original_title}
                  </h1>
                </div>
                <div className=' px-4 w-full flex flex-col justify-center items-center '>
                  <p className='w-full text-zinc-400 mt-2 text-sm'>
                    {d.overview.slice(0, 100)}...
                    <span className='text-blue-500'>more</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Horizontal;
