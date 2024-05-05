import React, { useEffect, useState } from 'react';
import Sidenav from '../TemplateP/Sidenav';
import Topnav from '../TemplateP/Topnav';
import axios from '../Utils/axios';
import Header from '../TemplateP/Header';
import Horizontal from '../TemplateP/Horizontal';
import Dropdown from '../TemplateP/Dropdown';
import Loading from '../TemplateP/Loading';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState('all');

    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            const index = Math.floor(Math.random() * data.results.length);
            const randomData = data.results[index];
            setWallpaper(randomData);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
        getTrending();
    }, [category, wallpaper]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='min-w-screen flex main-page min-h-[100vh]'>
                    <Sidenav />
                    <div className='w-[75vw] min-h-screen px-[2vw] '>
                        <Topnav />
                        <Header data={wallpaper} />

                        <div className='flex justify-between items-center h-[12vh] p-[2vh]'>
                            <div className='text-2xl text-zinc-300 font-bold'> Trending </div>
                            <div className='text-2xl text-zinc-300 font-bold p-[1vw] w-[25vw] '>
                                <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e) => { setCategory(e.target.value) }} />
                            </div>
                        </div>

                        <Horizontal data={trending} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
