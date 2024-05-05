import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../TemplateP/Topnav';
import Dropdown from '../TemplateP/Dropdown';
import axios from '../Utils/axios';
import Cards from '../TemplateP/Cards';
import Loading from '../TemplateP/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular() {
    const navigate = useNavigate();
    const [category, setcategory] = useState('movie');
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = 'Cinema | Popular ' + category;

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }
            else {

            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = async () => {
        if (popular.length === 0) {
            await getPopular();
        } else {
            setpage(1);
            setpopular([]);
        }
    };


    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular ? (
        <div className='w-screen min-h-screen p-[1.5vw] '>

            <div className='w-full font-bold  flex items-center gap-[1.5vh] justify-evenly mb-[6vh]'>
                <div className='flex gap-[1.5vh] justify-center items-center'>
                    <Link onClick={() => navigate(-1)} className='cursor-pointer'>
                        <FaArrowLeft className='text-zinc-400 text-[2.5vw] hover:text-[#6556CD]' />
                    </Link>
                    <div className='text-[2vw]  hover:text-[#6556CD] text-zinc-400 uppercase cursor-pointer'>popular</div>
                </div>
                <div className='flex items-center gap-[2vw]'>
                    <Topnav />
                    <Dropdown title="Category" options={['tv', 'movie']} func={(e) => setcategory(e.target.value)} />
                </div>
            </div>
            <InfiniteScroll
                loader={<Loading />}
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) :
        (<Loading />)
}

export default Popular