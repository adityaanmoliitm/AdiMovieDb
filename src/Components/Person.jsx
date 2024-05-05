import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../TemplateP/Topnav';
import Dropdown from '../TemplateP/Dropdown';
import axios from '../Utils/axios';
import Cards from '../TemplateP/Cards';
import Loading from '../TemplateP/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Person() {
    const navigate = useNavigate();
    const [category, setcategory] = useState('popular');
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title = 'Cinema | person ';


    const getPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }
            else {

            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refreshHandler = async () => {
        if (person.length === 0) {
            await getPerson();
        } else {
            setpage(1);
            setperson([]);
        }
    };


    useEffect(() => {
        refreshHandler();
    }, [category]);

    return person ? (
        <div className='w-screen min-h-screen p-[1.5vw] '>

            <div className='w-full font-bold  flex items-center gap-[1.5vh] justify-evenly mb-[6vh]'>
                <div className='flex gap-[1.5vh] justify-center items-center'>
                    <Link onClick={() => navigate(-1)} className='cursor-pointer'>
                        <FaArrowLeft className='text-zinc-400 text-[2.5vw] hover:text-[#6556CD]' />
                    </Link>
                    <div className='text-[2vw]  hover:text-[#6556CD] text-zinc-400 uppercase cursor-pointer'>person</div>
                </div>
                <div className='flex items-center gap-[2vw]'>
                    <Topnav />
                </div>
            </div>
            <InfiniteScroll
                loader={<Loading />}
                dataLength={person.length}
                next={getPerson}
                hasMore={hasMore}
            >
                <Cards data={person} title={category} />
            </InfiniteScroll>
        </div>
    ) :
        (<Loading />)
}


export default Person