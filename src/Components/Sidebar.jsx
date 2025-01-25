import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className='w-[20%] border-r-[4px] border-neutral-300 h-[90vh] max-xl:w-[50vw]'>
            <ul className='h-full p-10 text-3xl flex flex-col gap-5 text-neutral-700 '>
                <Link to={"/"} className={` flex items-center gap-5 cursor-pointer p-2 rounded-2xl `}  ><AiFillHome /> Home</Link>
                <Link to={"/create-post"} className={`flex items-center gap-5 cursor-pointer p-2 rounded-2xl `}><IoMdAddCircle />Create Post</Link>
            </ul>
        </div >
    )
}

export default Sidebar
