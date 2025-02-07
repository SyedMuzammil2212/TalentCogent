"use client"
import React from 'react';
import {motion} from "framer-motion"


function Mainbody() {
    return (
        <div className={ ' h-screen  bg-black   w-full  flex flex-col items-center justify-center  ' } >
            <motion.div className={" text-white text-[48px] font-semibold  "}
            initial={{
                opacity:0,
                filter:"blur(10px)",
                y:100
            }}
            animate={{
                opacity:1,
                filter:"blur(0px)",
                y:0
            }}
            transition={{
                duration:0.4
            }}
            >
                Crazy Kiya Re
            </motion.div>

        </div>
    );
}

export default Mainbody;