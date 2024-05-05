import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../TemplateP/Topnav';
import Dropdown from '../TemplateP/Dropdown';
import axios from '../Utils/axios';
import Cards from '../TemplateP/Cards';
import Loading from '../TemplateP/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Movies() {
    const navigate = useNavigate();
    const [category, setcategory] = useState('now_playing');
    const [movies, setMovies] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = 'Cinema | Movies ';


    const getmovies = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setMovies((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }
            else {

            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = async () => {
        if (movies.length === 0) {
            await getmovies();
        } else {
            setpage(1);
            setMovies([]);
        }
    };


    useEffect(() => {
        refreshHandler();
    }, [category]);

    return movies ? (
        <div className='w-screen min-h-screen p-[1.5vw] '>

            <div className='w-full font-bold  flex items-center gap-[1.5vh] justify-evenly mb-[6vh]'>
                <div className='flex gap-[1.5vh] justify-center items-center'>
                    <Link onClick={() => navigate(-1)} className='cursor-pointer'>
                        <FaArrowLeft className='text-zinc-400 text-[2.5vw] hover:text-[#6556CD]' />
                    </Link>
                    <div className='text-[2vw]  hover:text-[#6556CD] text-zinc-400 uppercase cursor-pointer'>movies</div>
                </div>
                <div className='flex items-center gap-[2vw]'>
                    <Topnav />
                    <Dropdown title="Category" options={['popular', 'top_rated', 'upcoming', 'now_playing']} func={(e) => setcategory(e.target.value)} />
                </div>
            </div>
            <InfiniteScroll
                loader={<Loading />}
                dataLength={movies.length}
                next={getmovies}
                hasMore={hasMore}
            >
                <Cards data={movies} title={category} />
            </InfiniteScroll>
        </div>
    ) :
        (<Loading />)
}


export default Movies