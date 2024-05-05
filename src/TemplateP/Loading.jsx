import React from 'react';
import './Loading.css'
import { motion } from "framer-motion"


function Loading() {
    return (
        <div className=' h-screen w-screen flex items-center justify-center flex-col'>
            <div className='loader'></div>
            <motion.div className='text-[5vw] text-white'
                initial={{ opacity: 0.5, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}>
                LOADING...
            </motion.div>
        </div>
    );
}

export default Loading;
