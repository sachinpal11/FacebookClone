import React, { useContext } from 'react'
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { PostListContext } from '../Store/Postlist-store';
function Posts({ title, body, reactions, tags, views, userId }) {
    const { DeletePost } = useContext(PostListContext);
    return (

        <div className='p-10 bg-neutral-300 w-2/4 flex flex-col rounded-2xl relative max-2xl:w-5/6' >
            <h1 className='text-2xl font-semibold mb-3 w-fit h-fit px-5 py-2 bg-blue-400 rounded-xl'>User ID:{userId}</h1>
            <span className='text-3xl w-full text-start text-wrap'>{title}</span>
            <RxCross2 className='absolute text-3xl right-5 top-5 w-fit h-fit p-3 rounded-full bg-neutral-400 cursor-pointer' onClick={() => DeletePost(userId)} />
            <br />
            <span className='text-2xl mb-4 w-full text-start text-wrap text-neutral-600'>{body}</span>
            <span className='flex gap-4 text-2xl mb-5'>{tags.map((tag, index) => (<li key={index} className='list-none px-4 py-2 rounded-xl bg-sky-400'>{tag}</li>))}</span>

            <div className='flex p-4 text-3xl justify-between border-t-[3px] border-neutral-400'>
                <span className='flex cursor-pointer'><AiTwotoneLike className='text-green-700' />{reactions.likes}</span>
                <span className='flex cursor-pointer'><AiTwotoneDislike className='text-red-700' />{reactions.dislikes}</span>
            </div>
            <span className='text-2xl w-fit h-fit px-5 py-2 bg-green-400 rounded-2xl font-semibold'>{views} Views</span>

        </div>
    )
}

export default Posts
