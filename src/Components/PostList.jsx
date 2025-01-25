import React, { useContext, useEffect, useRef } from 'react'
import Posts from './Posts'
import styles from './PostList.module.css'
import Footer from './Footer'
import { PostListContext } from '../Store/Postlist-store';
function PostList() {
    const { TotalPosts, AddInitialPost, loading } = useContext(PostListContext);


    return (
        <div className={`${styles.Postlist} w-full h-[80vh] flex flex-col gap-10 items-center p-10`}>
            {loading && <h1 className='text-4xl font-semibold'>loading...</h1>}
            {
                !loading &&
                TotalPosts.map((post, index) => (
                    < Posts title={post.title} key={index} userId={post.userId} body={post.body} views={post.views} tags={post.tags} reactions={post.reactions} />
                ))}
            <Footer />
        </div>
    )
}

export default PostList
