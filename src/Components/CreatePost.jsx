import React, { useContext, useRef } from 'react'
import Footer from './Footer'
import { PostListContext } from '../Store/Postlist-store'
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const { UploadPost } = useContext(PostListContext);
    const Navigate = useNavigate();
    const TitleDetail = useRef('');
    const descDetail = useRef('');
    const UserId = useRef('');
    const ImgDetail = useRef('');
    const UploadGivenPost = (e) => {
        e.preventDefault();
        var Tags = e.target[3].value;
        const NewPostval = {
            title: e.target[1].value, body: e.target[2].value, tags: Tags.split(" "), reactions: { likes: 0, dislikes: 0 }, views: 0, userId: e.target[0].value
        };
        UploadPost(NewPostval);
        console.log(NewPostval);
        TitleDetail.current.value = null;
        descDetail.current.value = null;
        ImgDetail.current.value = null;
        UserId.current.value = null;
        window.confirm("post uploaded");
        Navigate("/");
    }
    return (
        <div className='w-full p-10'>
            <form onSubmit={UploadGivenPost} className='flex flex-col bg-neutral-300 items-center gap-5 py-[5vh] text-3xl rounded-xl'>
                <span className='font-bold'>UserId</span>
                <input type="number" className='text-3xl w-[60%] p-4 outline-none' ref={UserId} placeholder='Enter Title' />
                <span className='font-bold'>Title</span>
                <input type="text" className='text-3xl w-[60%] p-4 outline-none' ref={TitleDetail} placeholder='Enter Title' />
                <span className='font-bold'>Description</span>
                <input type="text" className='text-3xl w-[60%] p-4 outline-none' ref={descDetail} placeholder='Enter Description ' />
                <span className='font-bold'>Tags</span>
                <input type="text" className='text-3xl w-[60%] p-4 outline-none' ref={ImgDetail} placeholder='Enter Image url' />
                <button type='submit' className='bg-blue-500 p-5 px-10 rounded-xl mt-10' >Upload Post</button>
            </form>
            <Footer />
        </div>
    )
}

export default CreatePost
