import React from 'react'
import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
function Header() {
    return (
        <div className=' w-full flex items-center justify-between h-[90px] border-b-[4px] border-neutral-300 px-5'>
            <div className='flex '>
                <div className="logo"><img className='w-[60px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png" alt="" /></div>
                <form action="" className='ml-10 rounded-full flex gap-3 px-3 bg-neutral-300'>
                    <button>
                        <IoSearch className='text-4xl text-neutral-600' />
                    </button>
                    <input type="text" className='text-3xl rounded-full py-3 outline-none bg-neutral-300 text-neutral-600' placeholder='Search Facebook' />
                </form></div>
            <ul className='flex py-[10px] rounded-full items-center gap-16 bg-neutral-300 px-14 text-neutral-800'>
                <li className='text-4xl'><AiFillHome /></li>
                <li className='text-4xl'><FaBell />
                </li>
                <li className='text-4xl'><MdVideoLibrary /></li>
            </ul>
            <IoMdSettings className='text-4xl p-3 w-fit h-fit bg-neutral-300 rounded-full' />
        </div>
    )
}

export default Header
