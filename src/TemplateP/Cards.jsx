import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ data }) {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
            {data.map((c, i) => (
                <Link to="/" className="relative flex flex-col items-center" key={i}>
                    <div className="w-48 lg:w-36 md:w-44 sm:w-60 relative">
                        <img
                            className="w-full  shadow-lg object-cover rounded-md shadow-zinc-500"
                            src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`}
                            alt=""
                        />
                        {
                            c.vote_average>0 &&
                            <div className='absolute top-[70%] right-[-10%] w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-600 rounded-full text-white text-[2vh] font-bold'>
                                <div> {(c.vote_average * 10).toFixed()}%</div>
                            </div>
                        }

                    </div>
                    <h1 className="text-lg text-center mt-3 text-zinc-300 font-semibold">
                        {c.name || c.title || c.original_name || c.original_title}
                    </h1>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
